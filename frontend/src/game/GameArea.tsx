// @ts-nocheck
import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

interface GameAreaProps {
    onGameOver: (score: number) => void;
}

const GameArea: React.FC<GameAreaProps> = ({ onGameOver }) => {
    const gameRef = useRef<HTMLDivElement>(null);
    const phaserGame = useRef<Phaser.Game | null>(null);

    useEffect(() => {
        if (phaserGame.current) return;

        // ─── PRELOADER SCENE ───
        class PreloaderScene extends Phaser.Scene {
            constructor() {
                super('Preloader');
            }

            preload() {
                // Loading bar
                const w = this.cameras.main.width;
                const h = this.cameras.main.height;
                const bar = this.add.rectangle(w / 2, h / 2, 300, 20, 0x222222);
                const fill = this.add.rectangle(w / 2 - 148, h / 2, 4, 16, 0xaa44ff);
                const loadText = this.add.text(w / 2, h / 2 - 40, 'Loading...', {
                    fontSize: '20px', color: '#aa44ff', fontFamily: 'monospace'
                }).setOrigin(0.5);

                this.load.on('progress', (val: number) => {
                    fill.width = 296 * val;
                    fill.x = w / 2 - 148 + (296 * val) / 2;
                });
                this.load.on('complete', () => { loadText.destroy(); bar.destroy(); fill.destroy(); });

                // Load assets
                this.load.image('background', '/assets/background.png');

                // ── Generate Grass Ground Texture ──
                const gg = this.make.graphics({ x: 0, y: 0, add: false });
                gg.fillStyle(0x5c4033); // Brown dirt
                gg.fillRect(0, 0, 128, 64);
                // Grass block at top
                gg.fillStyle(0x2d8a3e); // Base green
                gg.fillRect(0, 0, 128, 16);
                // Grass blades at top edge
                gg.fillStyle(0x3ab84f); // Lighter green
                for (let i = 0; i < 128; i += 8) {
                    gg.fillTriangle(i, 4, i + 4, -4, i + 8, 4);
                }
                gg.generateTexture('grass_ground', 128, 64);
            }

            create() {
                // ── Generate Runner Texture ──
                const rg = this.make.graphics({ x: 0, y: 0, add: false });
                // Shadow/glow base
                rg.fillStyle(0xaa44ff, 0.3);
                rg.fillCircle(30, 32, 26);
                // Body torso
                rg.fillStyle(0x1a1a2e);
                rg.fillRoundedRect(14, 8, 32, 44, 6);
                // Suit glow lines
                rg.lineStyle(2, 0xaa44ff, 1);
                rg.strokeRoundedRect(14, 8, 32, 44, 6);
                // Center energy stripe
                rg.fillStyle(0xaa44ff, 0.6);
                rg.fillRect(28, 10, 4, 40);
                // Visor/head
                rg.fillStyle(0x0a0a1a);
                rg.fillRoundedRect(18, 2, 24, 14, 5);
                rg.fillStyle(0x00ffff);
                rg.fillRoundedRect(20, 4, 20, 10, 4);
                // Visor shine
                rg.fillStyle(0xffffff, 0.4);
                rg.fillRoundedRect(22, 5, 8, 4, 2);
                // Energy core
                rg.fillStyle(0xff44aa);
                rg.fillCircle(30, 32, 5);
                rg.fillStyle(0xffffff, 0.5);
                rg.fillCircle(29, 31, 2);
                // Legs (running pose)
                rg.fillStyle(0x1a1a2e);
                rg.fillRect(16, 52, 10, 18);
                rg.fillRect(34, 52, 10, 18);
                rg.lineStyle(2, 0xff44aa, 0.8);
                rg.strokeRect(16, 52, 10, 18);
                rg.strokeRect(34, 52, 10, 18);
                // Boots glow
                rg.fillStyle(0xaa44ff, 0.8);
                rg.fillRect(14, 66, 14, 4);
                rg.fillRect(32, 66, 14, 4);
                // Arms
                rg.fillStyle(0x2a1a3e);
                rg.fillRect(6, 16, 8, 22);
                rg.fillRect(46, 16, 8, 22);
                rg.lineStyle(1, 0xaa44ff, 0.6);
                rg.strokeRect(6, 16, 8, 22);
                rg.strokeRect(46, 16, 8, 22);
                // Shoulder pads
                rg.fillStyle(0xaa44ff, 0.5);
                rg.fillCircle(10, 16, 5);
                rg.fillCircle(50, 16, 5);
                rg.generateTexture('runner', 60, 72);

                // ── Generate Obstacle Texture ──
                const og = this.make.graphics({ x: 0, y: 0, add: false });
                // Base
                og.fillStyle(0x330000);
                og.fillRect(4, 28, 32, 8);
                // Spike 1
                og.fillStyle(0xff2200);
                og.fillTriangle(8, 28, 20, 0, 16, 28);
                // Spike 2
                og.fillStyle(0xff4400);
                og.fillTriangle(18, 28, 28, 4, 26, 28);
                // Glow
                og.lineStyle(2, 0xff0000, 0.8);
                og.lineBetween(8, 28, 20, 0);
                og.lineBetween(18, 28, 28, 4);
                og.generateTexture('obstacle', 40, 36);

                // ── Generate Coin Texture ──
                const cg = this.make.graphics({ x: 0, y: 0, add: false });
                cg.fillStyle(0xffcc00);
                cg.fillCircle(12, 12, 10);
                cg.fillStyle(0xffaa00);
                cg.fillCircle(12, 12, 7);
                cg.fillStyle(0xffe066);
                cg.fillCircle(10, 10, 3);
                // S symbol
                cg.lineStyle(2, 0xcc8800, 1);
                cg.lineBetween(10, 8, 14, 8);
                cg.lineBetween(10, 12, 14, 12);
                cg.lineBetween(10, 16, 14, 16);
                cg.generateTexture('coin', 24, 24);

                // ── Generate Particle Texture ──
                const pg = this.make.graphics({ x: 0, y: 0, add: false });
                pg.fillStyle(0xffffff);
                pg.fillCircle(4, 4, 4);
                pg.generateTexture('particle', 8, 8);

                this.scene.start('MainGame');
            }
        }

        // ─── MAIN GAME SCENE ───
        class MainGame extends Phaser.Scene {
            private player!: Phaser.Physics.Arcade.Sprite;
            private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
            private obstacles!: Phaser.Physics.Arcade.Group;
            private coins!: Phaser.Physics.Arcade.Group;
            private groundTiles!: Phaser.GameObjects.TileSprite;
            private bgLayer!: Phaser.GameObjects.TileSprite;
            private scoreText!: Phaser.GameObjects.Text;
            private speedText!: Phaser.GameObjects.Text;
            private score = 0;
            private gameSpeed = 4;
            private isGameOver = false;
            private obstacleTimer!: Phaser.Time.TimerEvent;
            private coinTimer!: Phaser.Time.TimerEvent;
            private distanceTraveled = 0;
            private particles!: Phaser.GameObjects.Particles.ParticleEmitter;
            private isJumping = false;
            private touchStartY = 0;

            constructor() {
                super('MainGame');
            }

            create() {
                const { width, height } = this.scale;
                this.isGameOver = false;
                this.score = 0;
                this.gameSpeed = 4;
                this.distanceTraveled = 0;

                // ── Parallax background ──
                this.bgLayer = this.add.tileSprite(0, 0, width, height, 'background')
                    .setOrigin(0, 0)
                    .setScrollFactor(0);

                // ── Starfield overlay ──
                for (let i = 0; i < 60; i++) {
                    const star = this.add.circle(
                        Phaser.Math.Between(0, width),
                        Phaser.Math.Between(0, height * 0.6),
                        Phaser.Math.Between(1, 2),
                        0xffffff,
                        Phaser.Math.FloatBetween(0.2, 0.8)
                    );
                    this.tweens.add({
                        targets: star,
                        alpha: { from: star.alpha, to: 0.1 },
                        duration: Phaser.Math.Between(1000, 3000),
                        yoyo: true,
                        repeat: -1,
                    });
                }

                // ── Ground tile sprite (seamless scrolling) ──
                this.groundTiles = this.add.tileSprite(0, height - 64, width, 64, 'grass_ground')
                    .setOrigin(0, 0);

                // Ground physics body (invisible)
                // Position at height - 32 (center of the 64px block), height is 64. Top edge is exactly height - 64.
                const groundBody = this.add.rectangle(width / 2, height - 32, width, 64, 0x000000, 0);
                this.physics.add.existing(groundBody, true);

                // ── Player ──
                this.player = this.physics.add.sprite(120, height - 100, 'runner');
                this.player.setScale(1.2);
                this.player.setCollideWorldBounds(true);
                this.player.setGravityY(1200);
                this.player.setDepth(10);

                // Player glow pulse
                this.tweens.add({
                    targets: this.player,
                    alpha: { from: 0.85, to: 1 },
                    duration: 600,
                    yoyo: true,
                    repeat: -1,
                });

                this.physics.add.collider(this.player, groundBody);

                // ── Trail particles behind player ──
                this.particles = this.add.particles(0, 0, 'particle', {
                    speed: { min: 10, max: 30 },
                    scale: { start: 0.8, end: 0 },
                    alpha: { start: 0.6, end: 0 },
                    lifespan: 400,
                    frequency: 60,
                    blendMode: 'ADD',
                    follow: this.player,
                    followOffset: { x: -20, y: 15 },
                    tint: [0xaa44ff, 0xff44aa, 0x4444ff],
                });

                // ── Groups ──
                this.obstacles = this.physics.add.group({ allowGravity: false });
                this.coins = this.physics.add.group({ allowGravity: false });

                // ── Colliders & Overlaps ──
                this.physics.add.overlap(this.player, this.coins, this.collectCoin, undefined, this);
                this.physics.add.collider(this.player, this.obstacles, this.hitObstacle, undefined, this);

                // ── Input ──
                if (this.input.keyboard) {
                    this.cursors = this.input.keyboard.createCursorKeys();
                }
                // Force canvas focus for keyboard input
                this.game.canvas.setAttribute('tabindex', '0');
                this.game.canvas.focus();
                this.game.canvas.addEventListener('click', () => {
                    this.game.canvas.focus();
                });

                // Also listen for global key events as fallback
                this.input.keyboard?.on('keydown-UP', () => this.tryJump());
                this.input.keyboard?.on('keydown-SPACE', () => this.tryJump());
                this.input.keyboard?.on('keydown-DOWN', () => {
                    const isGrounded = this.player.body?.touching.down || this.player.body?.blocked.down;
                    if (!isGrounded) {
                        this.player.setVelocityY(900);
                    }
                });

                // Touch/mobile controls
                this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
                    this.touchStartY = pointer.y;
                    this.tryJump();
                });
                this.input.on('pointerup', (pointer: Phaser.Input.Pointer) => {
                    if (pointer.y - this.touchStartY > 50) {
                        // Swipe down = fast fall
                        const isGrounded = this.player.body?.touching.down || this.player.body?.blocked.down;
                        if (!isGrounded) {
                            this.player.setVelocityY(900);
                        }
                    }
                });

                // ── HUD ──
                this.scoreText = this.add.text(16, 16, '0', {
                    fontSize: '28px',
                    color: '#ffffff',
                    fontFamily: 'monospace',
                    stroke: '#000000',
                    strokeThickness: 4,
                }).setDepth(20);

                this.add.text(16, 4, 'SCORE', {
                    fontSize: '10px',
                    color: '#aa44ff',
                    fontFamily: 'monospace',
                }).setDepth(20);

                this.speedText = this.add.text(width - 16, 16, 'x1.0', {
                    fontSize: '18px',
                    color: '#44ffaa',
                    fontFamily: 'monospace',
                    stroke: '#000000',
                    strokeThickness: 3,
                }).setOrigin(1, 0).setDepth(20);

                this.add.text(width - 16, 4, 'SPEED', {
                    fontSize: '10px',
                    color: '#44ffaa',
                    fontFamily: 'monospace',
                }).setOrigin(1, 0).setDepth(20);

                // ── Spawners ──
                this.obstacleTimer = this.time.addEvent({
                    delay: 1800,
                    callback: this.spawnObstacle,
                    callbackScope: this,
                    loop: true,
                });

                this.coinTimer = this.time.addEvent({
                    delay: 1200,
                    callback: this.spawnCoin,
                    callbackScope: this,
                    loop: true,
                });
            }

            update(_time: number, delta: number) {
                if (this.isGameOver) return;

                const dt = delta / 1000;

                // Parallax scrolling
                this.bgLayer.tilePositionX += this.gameSpeed * 0.3;
                this.groundTiles.tilePositionX += this.gameSpeed * 2;

                // Jump
                if (this.cursors && (this.cursors.up.isDown || this.cursors.space.isDown)) {
                    this.tryJump();
                }

                const isGrounded = this.player.body?.touching.down || this.player.body?.blocked.down;

                // Fast fall
                if (this.cursors && this.cursors.down.isDown && !isGrounded) {
                    this.player.setVelocityY(900);
                }

                // Track landing
                if (isGrounded) {
                    if (this.isJumping) {
                        this.isJumping = false;
                        // Land effect
                        this.cameras.main.shake(50, 0.003);
                    }
                    this.player.setRotation(0);
                } else {
                    // Slight rotation while airborne
                    this.player.rotation += 0.03;
                }

                // Score increments with distance
                this.distanceTraveled += this.gameSpeed * dt;
                this.score = Math.floor(this.distanceTraveled * 10);
                this.scoreText.setText(this.score.toString());

                // Gradually increase speed
                this.gameSpeed = 4 + (this.distanceTraveled * 0.015);
                const speedMultiplier = (this.gameSpeed / 4).toFixed(1);
                this.speedText.setText(`x${speedMultiplier}`);

                // Dynamically adjust spawner rate
                const newObstDelay = Math.max(600, 1800 - this.distanceTraveled * 2);
                this.obstacleTimer.delay = newObstDelay;

                // Move obstacles and coins
                this.obstacles.getChildren().forEach((child: any) => {
                    child.x -= this.gameSpeed * 2;
                    if (child.x < -80) child.destroy();
                });

                this.coins.getChildren().forEach((child: any) => {
                    child.x -= this.gameSpeed * 2;
                    // Floating bob animation
                    child.y += Math.sin(child.getData('bob') || 0) * 0.5;
                    child.setData('bob', (child.getData('bob') || 0) + 0.08);
                    if (child.x < -40) child.destroy();
                });
            }

            tryJump() {
                const isGrounded = this.player.body?.touching.down || this.player.body?.blocked.down;
                if (isGrounded && !this.isJumping) {
                    this.player.setVelocityY(-700);
                    this.isJumping = true;
                    // Jump burst particle
                    this.add.particles(this.player.x, this.player.y + 20, 'particle', {
                        speed: { min: 50, max: 100 },
                        scale: { start: 1, end: 0 },
                        alpha: { start: 0.8, end: 0 },
                        lifespan: 300,
                        quantity: 8,
                        blendMode: 'ADD',
                        tint: [0xaa44ff, 0xff44ff],
                        angle: { min: 180, max: 360 },
                    });
                }
            }

            spawnObstacle() {
                if (this.isGameOver) return;
                const { width, height } = this.scale;

                const obstacle = this.physics.add.sprite(
                    width + 40,
                    height - 86, // Resting perfectly flush on the grass
                    'obstacle'
                );
                this.obstacles.add(obstacle);

                obstacle.setScale(1.2);
                const body = obstacle.body as Phaser.Physics.Arcade.Body;
                body.allowGravity = false;
                body.setImmovable(true);
                obstacle.setVelocityY(0);

                // Glow tween
                this.tweens.add({
                    targets: obstacle,
                    alpha: { from: 0.85, to: 1 },
                    duration: 300,
                    yoyo: true,
                    repeat: -1,
                });
            }

            spawnCoin() {
                if (this.isGameOver) return;
                const { width, height } = this.scale;

                const yPos = Phaser.Math.Between(height - 240, height - 120);
                const coin = this.physics.add.sprite(width + 20, yPos, 'coin');
                this.coins.add(coin);

                coin.setScale(1.2);
                const body = coin.body as Phaser.Physics.Arcade.Body;
                body.allowGravity = false;
                coin.setVelocityY(0);
                coin.setData('bob', Math.random() * Math.PI * 2);

                // Spin tween
                this.tweens.add({
                    targets: coin,
                    scaleX: { from: 1.2, to: 0.3 },
                    duration: 400,
                    yoyo: true,
                    repeat: -1,
                    ease: 'Sine.easeInOut',
                });
            }

            collectCoin(_player: any, coin: any) {
                // Burst effect
                this.add.particles(coin.x, coin.y, 'particle', {
                    speed: { min: 80, max: 150 },
                    scale: { start: 1.2, end: 0 },
                    alpha: { start: 1, end: 0 },
                    lifespan: 400,
                    quantity: 10,
                    blendMode: 'ADD',
                    tint: [0xffcc00, 0xffaa00, 0xff8800],
                });

                coin.destroy();
                this.score += 50;
                this.scoreText.setText(this.score.toString());

                // Flash score text
                this.tweens.add({
                    targets: this.scoreText,
                    scaleX: 1.3,
                    scaleY: 1.3,
                    duration: 100,
                    yoyo: true,
                });

                // Floating "+50" text
                const plus = this.add.text(coin.x, coin.y, '+50', {
                    fontSize: '18px',
                    color: '#ffcc00',
                    fontFamily: 'monospace',
                    stroke: '#000',
                    strokeThickness: 3,
                }).setOrigin(0.5).setDepth(15);

                this.tweens.add({
                    targets: plus,
                    y: coin.y - 50,
                    alpha: 0,
                    duration: 600,
                    onComplete: () => plus.destroy(),
                });
            }

            hitObstacle(_player: any, _obstacle: any) {
                this.physics.pause();
                this.particles.stop();
                this.player.setTint(0xff0000);
                this.isGameOver = true;

                // Screen shake & flash
                this.cameras.main.shake(300, 0.02);
                this.cameras.main.flash(200, 255, 0, 0);

                // Death particles
                this.add.particles(this.player.x, this.player.y, 'particle', {
                    speed: { min: 100, max: 250 },
                    scale: { start: 1.5, end: 0 },
                    alpha: { start: 1, end: 0 },
                    lifespan: 600,
                    quantity: 20,
                    blendMode: 'ADD',
                    tint: [0xff0000, 0xff4400, 0xff8800],
                });

                // Game over text
                const { width, height } = this.scale;
                const goText = this.add.text(width / 2, height / 2 - 40, 'WASTED', {
                    fontSize: '48px',
                    color: '#ff0000',
                    fontFamily: 'monospace',
                    stroke: '#000',
                    strokeThickness: 6,
                }).setOrigin(0.5).setDepth(30).setAlpha(0);

                this.tweens.add({
                    targets: goText,
                    alpha: 1,
                    scaleX: { from: 2, to: 1 },
                    scaleY: { from: 2, to: 1 },
                    duration: 400,
                    ease: 'Back.easeOut',
                });

                // Delay before calling React
                this.time.delayedCall(1500, () => {
                    onGameOver(this.score);
                });
            }
        }

        // ─── PHASER CONFIG ───
        const config: Phaser.Types.Core.GameConfig = {
            type: Phaser.AUTO,
            parent: gameRef.current!,
            width: 800,
            height: 600,
            scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH,
            },
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { x: 0, y: 300 },
                    debug: false,
                },
            },
            scene: [PreloaderScene, MainGame],
            render: {
                antialias: true,
                pixelArt: false,
            },
            backgroundColor: '#0a0a1a',
        };

        phaserGame.current = new Phaser.Game(config);

        return () => {
            phaserGame.current?.destroy(true);
            phaserGame.current = null;
        };
    }, [onGameOver]);

    return <div ref={gameRef} className="w-full h-full" onClick={() => gameRef.current?.querySelector('canvas')?.focus()} />;
};

export default GameArea;
