// Invite codes arrive pasted, typed or auto-capitalised: accept the whole link or just the code.
export function parseInvite(input: string | null | undefined): string | null {
  let s = (input ?? "").trim();
  const join = s.match(/\/join\/([^/?#\s]+)/i);
  if (join) s = join[1];
  s = s.toLowerCase();
  return /^[a-z0-9]{6,64}$/.test(s) ? s : null;
}
