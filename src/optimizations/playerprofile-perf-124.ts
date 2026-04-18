// Performance optimization for PlayerProfile
// PR #124

const cache = new Map<string, unknown>();

export function optimizedPlayerProfile(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
