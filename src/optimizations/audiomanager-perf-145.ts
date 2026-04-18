// Performance optimization for AudioManager
// PR #145

const cache = new Map<string, unknown>();

export function optimizedAudioManager(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
