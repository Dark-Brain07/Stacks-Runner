interface RetryOptions { maxRetries?: number; baseDelay?: number; maxDelay?: number; }
export async function withRetry<T>(fn: () => Promise<T>, options: RetryOptions = {}): Promise<T> {
  const { maxRetries = 3, baseDelay = 1000, maxDelay = 10000 } = options;
  let lastError: Error;
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try { return await fn(); } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));
      if (attempt < maxRetries) { const delay = Math.min(baseDelay * Math.pow(2, attempt), maxDelay); await new Promise(r => setTimeout(r, delay)); }
    }
  }
  throw lastError!;
}