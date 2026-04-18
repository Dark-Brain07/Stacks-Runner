// Performance optimization for FeatureFlags
// PR #278

const cache = new Map<string, unknown>();

export function optimizedFeatureFlags(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
