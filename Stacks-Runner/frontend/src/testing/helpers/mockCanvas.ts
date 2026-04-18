/**
 * mockCanvas - Test helper utility
 */
export function mockCanvas(options: Record<string, unknown> = {}) {
  return { ...options, __mock: true, __helper: 'mockCanvas' };
}

export function mockCanvasWithDefaults() {
  return mockCanvas({});
}
