// Client & Server-safe in-memory rate limiting helper with cooldown tracking
const submissionTimestamps: number[] = [];
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute

export function checkClientRateLimit(): { allowed: boolean; remainingSeconds?: number } {
  const now = Date.now();
  // Clear old timestamps outside window
  while (submissionTimestamps.length > 0 && submissionTimestamps[0] < now - RATE_LIMIT_WINDOW_MS) {
    submissionTimestamps.shift();
  }

  if (submissionTimestamps.length >= RATE_LIMIT_MAX) {
    const oldest = submissionTimestamps[0];
    const remainingSeconds = Math.ceil((oldest + RATE_LIMIT_WINDOW_MS - now) / 1000);
    return { allowed: false, remainingSeconds };
  }

  submissionTimestamps.push(now);
  return { allowed: true };
}
