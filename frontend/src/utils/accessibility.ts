export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
  let el = document.getElementById('sr-announcer');
  if (!el) { el = document.createElement('div'); el.id = 'sr-announcer'; el.setAttribute('aria-live', priority); el.setAttribute('aria-atomic', 'true'); el.style.cssText = 'position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)'; document.body.appendChild(el); }
  el.textContent = message;
}
export function prefersReducedMotion(): boolean { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
export function prefersDarkMode(): boolean { return window.matchMedia('(prefers-color-scheme: dark)').matches; }