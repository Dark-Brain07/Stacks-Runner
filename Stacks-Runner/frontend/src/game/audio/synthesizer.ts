let audioContext: AudioContext | null = null;
function getCtx(): AudioContext { if (!audioContext) audioContext = new AudioContext(); return audioContext; }
export function playTone(freq: number, dur: number, type: OscillatorType = 'sine', vol = 0.5): void {
  try { const ctx = getCtx(); const o = ctx.createOscillator(); const g = ctx.createGain(); o.type = type; o.frequency.value = freq; g.gain.setValueAtTime(vol, ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur); o.connect(g); g.connect(ctx.destination); o.start(); o.stop(ctx.currentTime + dur); } catch {}
}
export function playSequence(notes: Array<{ freq: number; dur: number }>, gap = 0.1): void { let d = 0; for (const n of notes) { setTimeout(() => playTone(n.freq, n.dur), d * 1000); d += n.dur + gap; } }