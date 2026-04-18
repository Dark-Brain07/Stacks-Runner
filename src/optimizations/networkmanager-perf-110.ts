// Performance optimization for NetworkManager
// PR #110

const cache = new Map<string, unknown>();

export function optimizedNetworkManager(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
