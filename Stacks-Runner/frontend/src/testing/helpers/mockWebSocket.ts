/**
 * mockWebSocket - Test helper utility
 */
export function mockWebSocket(options: Record<string, unknown> = {}) {
  return { ...options, __mock: true, __helper: 'mockWebSocket' };
}

export function mockWebSocketWithDefaults() {
  return mockWebSocket({});
}
