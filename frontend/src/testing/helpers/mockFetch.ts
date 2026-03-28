/**
 * mockFetch - Test helper utility
 */
export function mockFetch(options: Record<string, unknown> = {}) {
  return { ...options, __mock: true, __helper: 'mockFetch' };
}

export function mockFetchWithDefaults() {
  return mockFetch({});
}
