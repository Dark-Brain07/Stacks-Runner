export const TRANSITIONS = { fast: 'all 0.15s ease', normal: 'all 0.3s ease', slow: 'all 0.5s ease', spring: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' } as const;
export const EASINGS = { easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)', easeOut: 'cubic-bezier(0, 0, 0.2, 1)', easeIn: 'cubic-bezier(0.4, 0, 1, 1)', bounce: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' } as const;
export function staggerDelay(index: number, baseMs = 50): string { return index * baseMs + 'ms'; }
export function glowShadow(color: string, intensity = 1): string { return '0 0 ' + (15 * intensity) + 'px ' + color; }