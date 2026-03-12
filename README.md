# Stacks Runner

A production-ready Web3 endless runner game built on Stacks Mainnet.

## Table of Contents
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Smart Contracts](#smart-contracts-mainnet)
- [Quick Start](#quick-start)

## Live Demo

https://stacks-runner.vercel.app

## Features

- Endless runner with cyberpunk aesthetics
- Wallet integration with Leather and Xverse
- On-chain score submission
- NFT character system (SIP-009)
- Tier-based reward claiming
- Admin governance panel
- Mobile-responsive with touch controls
- PWA-ready

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Game Engine | Phaser 3 |
| Frontend | React 18 + TypeScript |
| Styling | Tailwind CSS v4 |
| Bundler | Vite |
| Blockchain | Stacks (Clarity) |
| Wallet | @stacks/connect v8 |
| Hosting | Vercel |

## Smart Contracts (Mainnet)

| Contract | Address |
|----------|---------|
| Score | SP1YH5MXTJT86BZXMFA2T51JF0QVZ8XNYV33QH6MF.score |
| NFT Trait | SP1YH5MXTJT86BZXMFA2T51JF0QVZ8XNYV33QH6MF.nft-trait |
| Character NFT | SP1YH5MXTJT86BZXMFA2T51JF0QVZ8XNYV33QH6MF.character-nft |
| Governance | SP1YH5MXTJT86BZXMFA2T51JF0QVZ8XNYV33QH6MF.governance |
| Game Vault | SP1YH5MXTJT86BZXMFA2T51JF0QVZ8XNYV33QH6MF.game-vault |
| Game Reward | SP1YH5MXTJT86BZXMFA2T51JF0QVZ8XNYV33QH6MF.game-reward |

## Quick Start

    git clone https://github.com/Dark-Brain07/Stacks-Runner.git
    cd Stacks-Runner/frontend
    npm install
    npm run dev

## Controls

| Input | Action |
|-------|--------|
| Up Arrow / Space | Jump |
| Down Arrow | Fast Fall |
| Tap (Mobile) | Jump |
| Swipe Down | Fast Fall |

## Documentation

- [Deployment Guide](DEPLOYMENT.md)
- [Contributing](CONTRIBUTING.md)
- [Changelog](CHANGELOG.md)
- [Game Design](frontend/docs/GAME_DESIGN.md)
- [Contract Architecture](contracts/docs/ARCHITECTURE.md)
- [Testing Guide](TESTING.md)
- [Roadmap](ROADMAP.md)

## License

MIT
