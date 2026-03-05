# Frontend Architecture

## Tech Stack
- React 18 with TypeScript
- Phaser 3 game engine
- Vite bundler
- Tailwind CSS v4
- @stacks/connect v8 wallet integration

## Component Structure
- App.tsx - Root component and game state management
- MainMenu.tsx - Game start screen with logo
- WalletConnect.tsx - Wallet connection handler
- GameOverModal.tsx - Score display and submission
- ContractPanel.tsx - Smart contract interaction UI
- GameArea.tsx - Phaser engine and game mechanics

## Game States
1. MENU - Main menu with wallet connect
2. PLAYING - Active Phaser game session
3. GAME_OVER - Score display with blockchain submission
