/**
 * mockResize - Test helper utility
 */
export function mockResize(options: Record<string, unknown> = {}) {
  return { ...options, __mock: true, __helper: 'mockResize' };
}

export function mockResizeWithDefaults() {
  return mockResize({});
}
