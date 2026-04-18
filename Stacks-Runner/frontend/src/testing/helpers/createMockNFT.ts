/**
 * createMockNFT - Test helper utility
 */
export function createMockNFT(options: Record<string, unknown> = {}) {
  return { ...options, __mock: true, __helper: 'createMockNFT' };
}

export function createMockNFTWithDefaults() {
  return createMockNFT({});
}
