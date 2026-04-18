export interface Shortcut { key: string; ctrl?: boolean; shift?: boolean; alt?: boolean; description: string; handler: () => void; }
export class ShortcutManager {
  private shortcuts: Shortcut[] = []; private active = true;
  register(s: Shortcut): void { this.shortcuts.push(s); }
  unregister(key: string): void { this.shortcuts = this.shortcuts.filter(s => s.key !== key); }
  enable(): void { this.active = true; }
  disable(): void { this.active = false; }
  handleKeyDown(e: KeyboardEvent): void { if (!this.active) return; for (const s of this.shortcuts) { if (e.key === s.key && !!e.ctrlKey === !!s.ctrl && !!e.shiftKey === !!s.shift) { e.preventDefault(); s.handler(); return; } } }
  getShortcuts(): Shortcut[] { return [...this.shortcuts]; }
  clear(): void { this.shortcuts = []; }
}
export const globalShortcuts = new ShortcutManager();