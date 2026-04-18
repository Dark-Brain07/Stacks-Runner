export function getStorageItem<T>(key: string, fallback: T): T {
  try { const item = localStorage.getItem(key); if (item === null) return fallback; return JSON.parse(item) as T; } catch { return fallback; }
}
export function setStorageItem<T>(key: string, value: T): void {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (err) { console.warn('Failed to save:', key, err); }
}
export function removeStorageItem(key: string): void {
  try { localStorage.removeItem(key); } catch { /* silent */ }
}
export function clearGameData(): void {
  ['stx-address', 'high-score', 'game-settings'].forEach(removeStorageItem);
}