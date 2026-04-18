// Performance optimization for WalletConnect
// PR #201

const cache = new Map<string, unknown>();

export function optimizedWalletConnect(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
