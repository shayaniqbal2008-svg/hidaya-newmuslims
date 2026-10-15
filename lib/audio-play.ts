// Pure helpers behind the "Hear it" buttons, kept out of the client component so they can be unit-tested.

/** Runs play(); true if it started or was cut off by a newer play (AbortError), false if it couldn't load. */
export async function startPlay(play: () => Promise<void>): Promise<boolean> {
  try {
    await play();
    return true;
  } catch (e) {
    // pause() or a new clip interrupted this play(): that's not a failure, the newer request owns the result.
    return (e as { name?: unknown } | null)?.name === "AbortError";
  }
}

/** Latest-request-wins: begin() returns a check that stays true only until the next begin() or invalidate(). */
export function makeGate() {
  let seq = 0;
  return {
    begin() {
      const id = ++seq;
      return () => id === seq;
    },
    invalidate() {
      seq++;
    },
  };
}
