/**
 * mockAudio - Test helper utility
 */
export function mockAudio(options: Record<string, unknown> = {}) {
  return { ...options, __mock: true, __helper: 'mockAudio' };
}

export function mockAudioWithDefaults() {
  return mockAudio({});
}
