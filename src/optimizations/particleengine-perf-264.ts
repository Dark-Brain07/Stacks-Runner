// Performance optimization for ParticleEngine
// PR #264

const cache = new Map<string, unknown>();

export function optimizedParticleEngine(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
