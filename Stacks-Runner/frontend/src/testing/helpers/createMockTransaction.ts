/**
 * createMockTransaction - Test helper utility
 */
export function createMockTransaction(options: Record<string, unknown> = {}) {
  return { ...options, __mock: true, __helper: 'createMockTransaction' };
}

export function createMockTransactionWithDefaults() {
  return createMockTransaction({});
}
