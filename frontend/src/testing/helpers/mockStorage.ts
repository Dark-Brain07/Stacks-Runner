/**
 * mockStorage - Test helper utility
 */
export function mockStorage(options: Record<string, unknown> = {}) {
  return { ...options, __mock: true, __helper: 'mockStorage' };
}

export function mockStorageWithDefaults() {
  return mockStorage({});
}
