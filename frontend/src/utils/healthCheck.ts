export interface HealthStatus { app: boolean; api: boolean; wallet: boolean; storage: boolean; audio: boolean; timestamp: number; }
export async function checkHealth(): Promise<HealthStatus> {
  const s: HealthStatus = { app: true, api: false, wallet: false, storage: false, audio: false, timestamp: Date.now() };
  try { const r = await fetch('https://api.hiro.so/v2/info'); s.api = r.ok; } catch {}
  try { localStorage.setItem('_hc', '1'); localStorage.removeItem('_hc'); s.storage = true; } catch {}
  try { s.audio = typeof AudioContext !== 'undefined'; } catch {}
  return s;
}
export function isFullyHealthy(s: HealthStatus): boolean { return s.app && s.api && s.storage; }