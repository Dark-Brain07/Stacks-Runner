// Performance optimization for GuildTreasury
// PR #96

const cache = new Map<string, unknown>();

export function optimizedGuildTreasury(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
