/**
 * createMockLeaderboard - Test helper utility
 */
export function createMockLeaderboard(options: Record<string, unknown> = {}) {
  return { ...options, __mock: true, __helper: 'createMockLeaderboard' };
}

export function createMockLeaderboardWithDefaults() {
  return createMockLeaderboard({});
}
