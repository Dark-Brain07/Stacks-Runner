// Performance optimization for StateManager
// PR #33

const cache = new Map<string, unknown>();

export function optimizedStateManager(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
