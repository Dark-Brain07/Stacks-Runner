export const BREAKPOINTS = { mobile: 480, tablet: 768, desktop: 1024, wide: 1440 } as const;
export function isMobile(): boolean { return window.innerWidth <= BREAKPOINTS.mobile; }
export function isTablet(): boolean { return window.innerWidth > BREAKPOINTS.mobile && window.innerWidth <= BREAKPOINTS.tablet; }
export function isDesktop(): boolean { return window.innerWidth > BREAKPOINTS.tablet; }
export function getCanvasScale(): number { const w = window.innerWidth; if (w <= 480) return 0.5; if (w <= 768) return 0.75; return 1.0; }
export function getOptimalCanvasSize(): { width: number; height: number } { const s = getCanvasScale(); return { width: Math.floor(800 * s), height: Math.floor(450 * s) }; }