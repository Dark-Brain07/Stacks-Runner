// Performance optimization for GameEngine
// PR #40

const cache = new Map<string, unknown>();

export function optimizedGameEngine(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
