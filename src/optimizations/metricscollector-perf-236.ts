// Performance optimization for MetricsCollector
// PR #236

const cache = new Map<string, unknown>();

export function optimizedMetricsCollector(key: string, compute: () => unknown): unknown {
  if (cache.has(key)) return cache.get(key);
  const result = compute();
  cache.set(key, result);
  return result;
}
