// Performance optimization for InputHandler
// PR #26

const cache = new Map<string, unknown>();

export function optimizedInputHandler(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
