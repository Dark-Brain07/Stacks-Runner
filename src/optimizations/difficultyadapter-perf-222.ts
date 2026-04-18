// Performance optimization for DifficultyAdapter
// PR #222

const cache = new Map<string, unknown>();

export function optimizedDifficultyAdapter(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
