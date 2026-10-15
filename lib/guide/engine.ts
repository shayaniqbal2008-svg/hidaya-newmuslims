// One guide turn: build the prompt, call the model, run the output check, regenerate once if needed.
// Shared by the chat route (app/api/guide) and the red-team eval (evals/red-team), so the eval tests
// exactly what converts get.
import Anthropic from "@anthropic-ai/sdk";
import type { Citation, Lesson } from "../content/types";
import { checkReply, FALLBACK_REPLY, splitAskImam } from "./check";
import { conversationBlock, GUIDE_RULES, type GuideProfile, type RoleplayBrief } from "./prompt";
import { formatReferences, pickReferences } from "./references";

/** Which model answers. Decided by the red-team eval (T3 decision): Sonnet 5.5 vs Haiku 4.5. */
export const GUIDE_MODEL = process.env.GUIDE_MODEL || "claude-sonnet-5-5";

export type Turn = { role: "user" | "assistant"; text: string };

export type GuideResult = {
  reply: string;
  askImam: string | null;
  citations: string[];
  regenerated: boolean;
  fellBack: boolean;
  model: string;
  usage: { input: number; output: number; cacheRead: number; cacheWrite: number };
};

const wrapUser = (t: string) => `<convert_message>\n${t}\n</convert_message>`;

export async function guideTurn(opts: {
  client: Anthropic;
  model?: string;
  lesson: Lesson | null;
  profile: GuideProfile;
  roleplay: RoleplayBrief | null;
  history: Turn[];
  message: string;
  citations: Record<string, Citation>;
}): Promise<GuideResult> {
  const model = opts.model ?? GUIDE_MODEL;
  const refs = pickReferences(opts.citations, opts.lesson, [opts.message, ...opts.history.slice(-2).map((t) => t.text)].join(" "));
  const block = conversationBlock({
    lesson: opts.lesson,
    references: formatReferences(refs),
    profile: opts.profile,
    roleplay: opts.roleplay,
  });
  const approved = new Set(Object.keys(opts.citations));
  const messages: Anthropic.MessageParam[] = [
    ...opts.history.slice(-20).map((t) => ({ role: t.role, content: t.role === "user" ? wrapUser(t.text) : t.text })),
    { role: "user", content: wrapUser(opts.message) },
  ];
  // History must start with a user turn.
  while (messages.length && messages[0].role !== "user") messages.shift();

  const usage = { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 };
  const call = async (extra?: string) => {
    const system: Anthropic.TextBlockParam[] = [
      { type: "text", text: GUIDE_RULES, cache_control: { type: "ephemeral" } },
      { type: "text", text: block, cache_control: { type: "ephemeral" } },
    ];
    if (extra) system.push({ type: "text", text: extra });
    const res = await create(opts.client, model, system, messages);
    usage.input += res.usage.input_tokens;
    usage.output += res.usage.output_tokens;
    usage.cacheRead += res.usage.cache_read_input_tokens ?? 0;
    usage.cacheWrite += res.usage.cache_creation_input_tokens ?? 0;
    if (res.stop_reason === "refusal") return null;
    return res.content
      .filter((b): b is Extract<typeof b, { type: "text" }> => b.type === "text")
      .map((b) => b.text)
      .join("")
      .trim();
  };

  let text = await call();
  let regenerated = false;
  let check = text ? checkReply(text, approved) : null;
  if (!text || !check?.ok) {
    regenerated = true;
    const why = check && !check.ok ? check.reasons.join("; ") : "the reply was empty";
    text = await call(
      `Your previous draft failed the scripture check (${why}). Write the reply again. Cite only references from APPROVED REFERENCES, in [brackets], and don't attribute words to Allah or the Prophet ﷺ without one. If you can't answer reliably, say so and offer to send the question to their imam.`,
    );
    check = text ? checkReply(text, approved) : null;
  }
  if (!text || !check?.ok) {
    return {
      reply: FALLBACK_REPLY,
      askImam: opts.message.slice(0, 1000),
      citations: [],
      regenerated,
      fellBack: true,
      model,
      usage,
    };
  }
  const { reply, askImam } = splitAskImam(text);
  return { reply, askImam, citations: check.citations, regenerated, fellBack: false, model, usage };
}

async function create(client: Anthropic, model: string, system: Anthropic.TextBlockParam[], messages: Anthropic.MessageParam[]) {
  if (model === "claude-sonnet-5-5") {
    // Low effort suits short chat replies. Server-side fallback re-runs a safety-classifier decline on
    // Anthropic's recommended model instead of failing the turn.
    return client.beta.messages.create({
      model,
      max_tokens: 4000,
      system,
      messages,
      output_config: { effort: "low" },
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
    });
  }
  return client.messages.create({ model, max_tokens: 1500, system, messages });
}
