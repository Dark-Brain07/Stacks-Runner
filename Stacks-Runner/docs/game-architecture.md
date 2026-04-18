# Game Architecture
## Overview
The game uses Phaser 3 as the rendering engine, wrapped in a React component.
## Scene Lifecycle
1. preload() - Generate textures programmatically
2. create() - Set up physics, sprites, and input
3. update() - Game loop: movement, collisions, scoring
## Physics
- Arcade physics with gravity
- Player has custom gravity (1200)
- Ground collider prevents falling through
- Obstacles and coins have gravity disabled
## Spawning System
- Obstacles spawn on timer with random delay
- Coins spawn independently
- Speed increases over time
- Spawn rate adjusts with difficulty
## Texture Generation
All textures are generated programmatically using Phaser graphics:
- Player: cyberpunk runner character
- Obstacles: glowing spike hazards
- Coins: rotating gold tokens
- Ground: grass and dirt layers
- Background: loaded from asset file
