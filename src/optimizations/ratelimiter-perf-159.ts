// Performance optimization for RateLimiter
// PR #159

const cache = new Map<string, unknown>();

export function optimizedRateLimiter(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
