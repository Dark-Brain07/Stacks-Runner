/**
 * flushPromises - Test helper utility
 */
export function flushPromises(options: Record<string, unknown> = {}) {
  return { ...options, __mock: true, __helper: 'flushPromises' };
}

export function flushPromisesWithDefaults() {
  return flushPromises({});
}
