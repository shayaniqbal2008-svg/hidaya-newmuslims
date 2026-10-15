/** Every table "Download my data" exports: everything the convert owns (T3 §3.3 rule 6). */
export const EXPORT_TABLES = ["converts", "convert_settings", "lesson_progress", "review_items", "action_logs", "carry_forward_items",
  "screen_responses", "reflections", "ai_threads", "ai_messages", "imam_questions", "safety_alerts", "practice_mistakes",
  "activity_days", "streak_state"] as const;

/** Convert-keyed tables left out on purpose, with the reason. */
export const NOT_EXPORTED: Record<string, string> = {
  push_subscriptions: "browser push keys for a device, not the convert's content",
  ai_feedback: "insert-only for converts (RLS), so their session can't read it back",
};
