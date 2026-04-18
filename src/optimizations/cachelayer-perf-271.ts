// Performance optimization for CacheLayer
// PR #271

const cache = new Map<string, unknown>();

export function optimizedCacheLayer(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
