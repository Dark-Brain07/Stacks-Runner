/**
 * createMockGame - Test helper utility
 */
export function createMockGame(options: Record<string, unknown> = {}) {
  return { ...options, __mock: true, __helper: 'createMockGame' };
}

export function createMockGameWithDefaults() {
  return createMockGame({});
}
