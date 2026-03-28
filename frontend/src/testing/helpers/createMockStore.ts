/**
 * createMockStore - Test helper utility
 */
export function createMockStore(options: Record<string, unknown> = {}) {
  return { ...options, __mock: true, __helper: 'createMockStore' };
}

export function createMockStoreWithDefaults() {
  return createMockStore({});
}
