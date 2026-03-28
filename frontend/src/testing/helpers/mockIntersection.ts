/**
 * mockIntersection - Test helper utility
 */
export function mockIntersection(options: Record<string, unknown> = {}) {
  return { ...options, __mock: true, __helper: 'mockIntersection' };
}

export function mockIntersectionWithDefaults() {
  return mockIntersection({});
}
