export function debounce<T extends (...args: any[]) => any>(fn: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => { clearTimeout(timeout); timeout = setTimeout(() => fn(...args), wait); };
}
export function throttle<T extends (...args: any[]) => any>(fn: T, wait: number): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args: Parameters<T>) => { const now = Date.now(); if (now - lastCall >= wait) { lastCall = now; fn(...args); } };
}