// Performance optimization for LeaderBoard
// PR #285

const cache = new Map<string, unknown>();

export function optimizedLeaderBoard(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
