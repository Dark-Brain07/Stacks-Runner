// Performance optimization for LootBox
// PR #215

const cache = new Map<string, unknown>();

export function optimizedLootBox(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
