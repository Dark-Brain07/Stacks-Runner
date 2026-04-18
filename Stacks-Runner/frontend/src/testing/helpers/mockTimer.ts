/**
 * mockTimer - Test helper utility
 */
export function mockTimer(options: Record<string, unknown> = {}) {
  return { ...options, __mock: true, __helper: 'mockTimer' };
}

export function mockTimerWithDefaults() {
  return mockTimer({});
}
