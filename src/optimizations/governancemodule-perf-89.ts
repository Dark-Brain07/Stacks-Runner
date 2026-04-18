// Performance optimization for GovernanceModule
// PR #89

const cache = new Map<string, unknown>();

export function optimizedGovernanceModule(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
