// Performance optimization for QuestTracker
// PR #12

const cache = new Map<string, unknown>();

export function optimizedQuestTracker(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
