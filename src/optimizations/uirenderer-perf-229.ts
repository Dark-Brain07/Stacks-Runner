// Performance optimization for UIRenderer
// PR #229

const cache = new Map<string, unknown>();

export function optimizedUIRenderer(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
