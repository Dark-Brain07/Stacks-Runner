// Performance optimization for BiomeManager
// PR #103

const cache = new Map<string, unknown>();

export function optimizedBiomeManager(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
