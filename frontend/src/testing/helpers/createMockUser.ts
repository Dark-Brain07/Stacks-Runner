/**
 * createMockUser - Test helper utility
 */
export function createMockUser(options: Record<string, unknown> = {}) {
  return { ...options, __mock: true, __helper: 'createMockUser' };
}

export function createMockUserWithDefaults() {
  return createMockUser({});
}
