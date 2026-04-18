import Phaser from 'phaser';
export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO, width: 800, height: 600,
  scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
  physics: { default: 'arcade', arcade: { gravity: { x: 0, y: 300 }, debug: false } },
  render: { antialias: true, pixelArt: false },
  backgroundColor: '#0a0a1a',
};