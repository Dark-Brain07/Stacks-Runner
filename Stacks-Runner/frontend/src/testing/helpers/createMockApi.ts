/**
 * createMockApi - Test helper utility
 */
export function createMockApi(options: Record<string, unknown> = {}) {
  return { ...options, __mock: true, __helper: 'createMockApi' };
}

export function createMockApiWithDefaults() {
  return createMockApi({});
}
