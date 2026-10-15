"use client";
// Short clips (letter names). One clip at a time; a clip that can't load (offline, blocked) just doesn't play.
import { startPlay } from "@/lib/audio-play";

let current: HTMLAudioElement | null = null;

/**
 * Plays src; resolves true if it started (or was interrupted by a newer clip), false if it couldn't load.
 * Never throws.
 */
export async function playClip(src: string): Promise<boolean> {
  return startPlay(async () => {
    current?.pause();
    current = new Audio(src);
    await current.play();
  });
}
