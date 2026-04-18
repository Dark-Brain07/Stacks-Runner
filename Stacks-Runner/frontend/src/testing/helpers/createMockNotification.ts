/**
 * createMockNotification - Test helper utility
 */
export function createMockNotification(options: Record<string, unknown> = {}) {
  return { ...options, __mock: true, __helper: 'createMockNotification' };
}

export function createMockNotificationWithDefaults() {
  return createMockNotification({});
}
