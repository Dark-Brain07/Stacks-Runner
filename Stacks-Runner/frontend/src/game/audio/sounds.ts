export const SOUND_EFFECTS = {
  jump: { frequency: 400, duration: 0.15, type: 'sine' as OscillatorType, volume: 0.6 },
  coin: { frequency: 800, duration: 0.1, type: 'sine' as OscillatorType, volume: 0.5 },
  hit: { frequency: 150, duration: 0.3, type: 'sawtooth' as OscillatorType, volume: 0.7 },
  powerUp: { frequency: 600, duration: 0.2, type: 'triangle' as OscillatorType, volume: 0.5 },
  gameOver: { frequency: 200, duration: 0.5, type: 'square' as OscillatorType, volume: 0.8 },
  levelUp: { frequency: 500, duration: 0.3, type: 'sine' as OscillatorType, volume: 0.6 },
  menuClick: { frequency: 700, duration: 0.05, type: 'sine' as OscillatorType, volume: 0.3 },
  scoreSubmit: { frequency: 900, duration: 0.2, type: 'triangle' as OscillatorType, volume: 0.5 }
} as const;
export type SoundName = keyof typeof SOUND_EFFECTS;