interface SoundConfig { volume: number; muted: boolean; }
class AudioManager {
  private config: SoundConfig = { volume: 0.7, muted: false };
  setVolume(v: number): void { this.config.volume = Math.max(0, Math.min(1, v)); }
  getVolume(): number { return this.config.volume; }
  toggleMute(): boolean { this.config.muted = !this.config.muted; return this.config.muted; }
  isMuted(): boolean { return this.config.muted; }
  play(name: string): void { if (this.config.muted) return; }
}
export const audioManager = new AudioManager();