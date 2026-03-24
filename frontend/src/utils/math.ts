export function clamp(value: number, min: number, max: number): number { return Math.min(Math.max(value, min), max); }
export function lerp(start: number, end: number, t: number): number { return start + (end - start) * clamp(t, 0, 1); }
export function mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number { return outMin + ((value - inMin) * (outMax - outMin)) / (inMax - inMin); }
export function randomInt(min: number, max: number): number { return Math.floor(Math.random() * (max - min + 1)) + min; }
export function randomFloat(min: number, max: number): number { return Math.random() * (max - min) + min; }
export function degToRad(degrees: number): number { return degrees * (Math.PI / 180); }
export function distance(x1: number, y1: number, x2: number, y2: number): number { return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2); }