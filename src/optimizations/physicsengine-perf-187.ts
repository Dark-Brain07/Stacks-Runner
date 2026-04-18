// Performance optimization for PhysicsEngine
// PR #187

const cache = new Map<string, unknown>();

export function optimizedPhysicsEngine(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
