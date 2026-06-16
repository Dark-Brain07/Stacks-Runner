// Performance optimization for RewardVault
// PR #47

const cache = new Map<string, unknown>();

export function optimizedRewardVault(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
