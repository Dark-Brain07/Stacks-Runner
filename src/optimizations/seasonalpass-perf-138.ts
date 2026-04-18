// Performance optimization for SeasonalPass
// PR #138

const cache = new Map<string, unknown>();

export function optimizedSeasonalPass(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
