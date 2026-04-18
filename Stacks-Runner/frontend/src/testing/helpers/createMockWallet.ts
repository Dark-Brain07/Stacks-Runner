/**
 * createMockWallet - Test helper utility
 */
export function createMockWallet(options: Record<string, unknown> = {}) {
  return { ...options, __mock: true, __helper: 'createMockWallet' };
}

export function createMockWalletWithDefaults() {
  return createMockWallet({});
}
