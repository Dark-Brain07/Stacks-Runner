// Performance optimization for CraftingSystem
// PR #54

const cache = new Map<string, unknown>();

export function optimizedCraftingSystem(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
