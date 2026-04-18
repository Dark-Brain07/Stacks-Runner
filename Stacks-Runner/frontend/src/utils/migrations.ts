export interface Migration { version: number; name: string; up: () => void; }
const MIGRATIONS: Migration[] = [
  { version: 1, name: 'initial-schema', up: () => {} },
  { version: 2, name: 'add-stats', up: () => { if (!localStorage.getItem('runner-stats')) localStorage.setItem('runner-stats', JSON.stringify({ scores: [], times: [], coins: 0 })); } },
  { version: 3, name: 'add-notif-prefs', up: () => { if (!localStorage.getItem('notif-prefs')) localStorage.setItem('notif-prefs', JSON.stringify({ achievements: true, dailyChallenge: true })); } }
];
const VK = 'runner-db-version';
export function getCurrentVersion(): number { return parseInt(localStorage.getItem(VK) || '0', 10); }
export function runMigrations(): string[] { const cur = getCurrentVersion(); const pending = MIGRATIONS.filter(m => m.version > cur); const applied: string[] = []; for (const m of pending) { m.up(); localStorage.setItem(VK, m.version.toString()); applied.push(m.name); } return applied; }
export function getPendingMigrations(): Migration[] { return MIGRATIONS.filter(m => m.version > getCurrentVersion()); }