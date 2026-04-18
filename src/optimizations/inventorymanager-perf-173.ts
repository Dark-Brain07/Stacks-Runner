// Performance optimization for InventoryManager
// PR #173

const cache = new Map<string, unknown>();

export function optimizedInventoryManager(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
