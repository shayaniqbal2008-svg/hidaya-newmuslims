// Bookkeeping for Practice → Mistakes: a wrong answer opens (or reopens) a mistake; it clears after
// two right answers in a row, and a wrong answer resets that run.

export type MistakeRow = { wrong_count: number; right_streak: number; cleared_at: string | null };

/** The row to write after an answer, or null when there's nothing to record. */
export function nextMistake(prev: MistakeRow | null, correct: boolean, now: Date): MistakeRow | null {
  const open = prev && !prev.cleared_at;
  if (correct) {
    if (!open) return null;
    const right_streak = prev.right_streak + 1;
    return { wrong_count: prev.wrong_count, right_streak, cleared_at: right_streak >= 2 ? now.toISOString() : null };
  }
  return { wrong_count: (prev?.wrong_count ?? 0) + 1, right_streak: 0, cleared_at: null };
}
