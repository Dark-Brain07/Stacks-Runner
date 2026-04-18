export interface Notification { id: string; type: 'info' | 'success' | 'warning' | 'error' | 'achievement'; title: string; message: string; duration: number; timestamp: number; }
let counter = 0; const queue: Notification[] = []; const listeners: Array<(ns: Notification[]) => void> = [];
function emit(): void { listeners.forEach(fn => fn([...queue])); }
export function notify(type: Notification['type'], title: string, message: string, duration = 4000): string { const id = 'n-' + (++counter); queue.push({ id, type, title, message, duration, timestamp: Date.now() }); if (queue.length > 5) queue.shift(); emit(); setTimeout(() => dismiss(id), duration); return id; }
export function dismiss(id: string): void { const i = queue.findIndex(n => n.id === id); if (i !== -1) { queue.splice(i, 1); emit(); } }
export function subscribe(fn: (ns: Notification[]) => void): () => void { listeners.push(fn); return () => { const i = listeners.indexOf(fn); if (i !== -1) listeners.splice(i, 1); }; }
export function notifySuccess(t: string, m: string): string { return notify('success', t, m); }
export function notifyError(t: string, m: string): string { return notify('error', t, m, 6000); }