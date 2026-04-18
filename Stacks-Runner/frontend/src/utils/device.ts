export function isMobileDevice(): boolean { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); }
export function isTouchDevice(): boolean { return 'ontouchstart' in window || navigator.maxTouchPoints > 0; }
export function getDevicePixelRatio(): number { return window.devicePixelRatio || 1; }
export function isLandscape(): boolean { return window.innerWidth > window.innerHeight; }
export function supportsWebGL(): boolean { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl') || c.getContext('experimental-webgl')); } catch { return false; } }