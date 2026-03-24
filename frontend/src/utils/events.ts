type EventCallback = (...args: any[]) => void;
export class GameEventEmitter {
  private listeners: Map<string, Set<EventCallback>> = new Map();
  on(event: string, cb: EventCallback): void { if (!this.listeners.has(event)) this.listeners.set(event, new Set()); this.listeners.get(event)!.add(cb); }
  off(event: string, cb: EventCallback): void { this.listeners.get(event)?.delete(cb); }
  emit(event: string, ...args: any[]): void { this.listeners.get(event)?.forEach(cb => { try { cb(...args); } catch (e) { console.error('Event error:', event, e); } }); }
  removeAll(): void { this.listeners.clear(); }
}
export const gameEvents = new GameEventEmitter();