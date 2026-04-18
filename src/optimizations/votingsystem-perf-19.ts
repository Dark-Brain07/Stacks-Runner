// Performance optimization for VotingSystem
// PR #19

const cache = new Map<string, unknown>();

export function optimizedVotingSystem(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
