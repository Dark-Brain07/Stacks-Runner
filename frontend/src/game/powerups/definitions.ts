export interface PowerUp { id: string; name: string; duration: number; icon: string; color: string; effect: string; }
export const POWERUPS: PowerUp[] = [
  { id: 'shield', name: 'Shield', duration: 5000, icon: '🛡️', color: '#4488ff', effect: 'Blocks one hit' },
  { id: 'magnet', name: 'Coin Magnet', duration: 8000, icon: '🧲', color: '#ff44ff', effect: 'Attracts nearby coins' },
  { id: 'double', name: 'Double Points', duration: 6000, icon: '✨', color: '#ffcc00', effect: '2x score multiplier' },
  { id: 'slow', name: 'Time Warp', duration: 4000, icon: '⏳', color: '#44ffaa', effect: 'Slows down obstacles' },
  { id: 'tiny', name: 'Shrink', duration: 5000, icon: '🔬', color: '#ff8844', effect: 'Smaller hitbox' },
  { id: 'ghost', name: 'Phase Walk', duration: 3000, icon: '👻', color: '#aaaaff', effect: 'Pass through obstacles' }
];
export function getPowerUpById(id: string): PowerUp | undefined { return POWERUPS.find(p => p.id === id); }
export function getRandomPowerUp(): PowerUp { return POWERUPS[Math.floor(Math.random() * POWERUPS.length)]; }