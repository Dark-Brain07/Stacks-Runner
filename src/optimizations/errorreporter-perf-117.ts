// Performance optimization for ErrorReporter
// PR #117

const cache = new Map<string, unknown>();

export function optimizedErrorReporter(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
