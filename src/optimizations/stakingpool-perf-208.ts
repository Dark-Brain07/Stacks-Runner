// Performance optimization for StakingPool
// PR #208

const cache = new Map<string, unknown>();

export function optimizedStakingPool(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
