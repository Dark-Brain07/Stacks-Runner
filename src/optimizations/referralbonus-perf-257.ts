// Performance optimization for ReferralBonus
// PR #257

const cache = new Map<string, unknown>();

export function optimizedReferralBonus(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
