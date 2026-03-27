export interface SaveData { version: number; highScore: number; totalCoins: number; gamesPlayed: number; totalPlayTime: number; achievementsUnlocked: string[]; settings: { volume: number; sfx: boolean; music: boolean; theme: string; locale: string }; lastPlayed: number; }
const KEY = 'runner-save-data'; const VER = 1;
const DEFAULTS: SaveData = { version: VER, highScore: 0, totalCoins: 0, gamesPlayed: 0, totalPlayTime: 0, achievementsUnlocked: [], settings: { volume: 0.7, sfx: true, music: true, theme: 'dark', locale: 'en' }, lastPlayed: 0 };
export function loadSave(): SaveData { try { const r = localStorage.getItem(KEY); if (!r) return { ...DEFAULTS }; return { ...DEFAULTS, ...JSON.parse(r) }; } catch { return { ...DEFAULTS }; } }
export function writeSave(d: SaveData): void { d.version = VER; localStorage.setItem(KEY, JSON.stringify(d)); }
export function resetSave(): void { localStorage.removeItem(KEY); }
export function exportSave(): string { return btoa(JSON.stringify(loadSave())); }
export function importSave(enc: string): boolean { try { writeSave(JSON.parse(atob(enc))); return true; } catch { return false; } }