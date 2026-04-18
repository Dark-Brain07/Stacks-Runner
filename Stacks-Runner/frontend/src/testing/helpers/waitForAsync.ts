/**
 * waitForAsync - Test helper utility
 */
export function waitForAsync(options: Record<string, unknown> = {}) {
  return { ...options, __mock: true, __helper: 'waitForAsync' };
}

export function waitForAsyncWithDefaults() {
  return waitForAsync({});
}
