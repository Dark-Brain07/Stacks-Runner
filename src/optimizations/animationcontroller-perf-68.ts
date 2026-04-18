// Performance optimization for AnimationController
// PR #68

const cache = new Map<string, unknown>();

export function optimizedAnimationController(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
