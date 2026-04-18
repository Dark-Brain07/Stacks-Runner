// Performance optimization for CharacterNFT
// PR #180

const cache = new Map<string, unknown>();

export function optimizedCharacterNFT(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
