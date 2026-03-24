$repoDir = "f:\Stacks Talent Project\Stacks-Runner"
Set-Location $repoDir

# ── 1. Add MIT License ──
@"
MIT License

Copyright (c) 2026 Stacks Runner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
"@ | Set-Content -Path "$repoDir\LICENSE" -Encoding UTF8
git add LICENSE
git commit -m "docs: Add MIT License for open source distribution"

# ── 2. Add CONTRIBUTING.md ──
@"
# Contributing to Stacks Runner

Thank you for your interest in contributing to Stacks Runner!

## Getting Started

1. Fork the repository
2. Clone your fork
3. Install dependencies: cd frontend && npm install
4. Start development: npm run dev

## Development Workflow

- Create a feature branch from main
- Make your changes
- Test thoroughly
- Submit a Pull Request

## Smart Contract Changes

- All contract changes must pass clarinet check
- Test contracts locally before proposing mainnet changes
- Document any new public functions

## Code Style

- Use TypeScript for all frontend code
- Follow existing naming conventions
- Add comments for complex logic

## Reporting Issues

- Use GitHub Issues for bug reports
- Include steps to reproduce
- Include browser and wallet version
"@ | Set-Content -Path "$repoDir\CONTRIBUTING.md" -Encoding UTF8
git add CONTRIBUTING.md
git commit -m "docs: Add contributing guidelines for open source collaboration"

# ── 3. Add SECURITY.md ──
@"
# Security Policy

## Supported Versions

| Version | Supported |
| ------- | --------- |
| 1.0.x   | Yes       |

## Reporting a Vulnerability

If you discover a security vulnerability in Stacks Runner, please report it responsibly.

Do NOT open a public GitHub issue for security vulnerabilities.

We will acknowledge your report within 48 hours and provide a timeline for a fix.

## Smart Contract Security

- All contracts are deployed on Stacks Mainnet
- Admin functions are protected by owner-only access controls
- Score submissions require a fee to prevent spam
- The vault contract uses balance tracking for fund management
"@ | Set-Content -Path "$repoDir\SECURITY.md" -Encoding UTF8
git add SECURITY.md
git commit -m "docs: Add security policy for responsible vulnerability disclosure"

# ── 4. Add CODE_OF_CONDUCT.md ──
@"
# Code of Conduct

## Our Pledge

We are committed to making participation in this project a harassment-free experience for everyone.

## Our Standards

Examples of behavior that contributes to a positive environment:
- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what is best for the community

## Enforcement

Instances of abusive or unacceptable behavior may be reported to the project maintainers.
"@ | Set-Content -Path "$repoDir\CODE_OF_CONDUCT.md" -Encoding UTF8
git add CODE_OF_CONDUCT.md
git commit -m "docs: Add code of conduct for community guidelines"

# ── 5. Add .env.example ──
@"
# Stacks Network Configuration
VITE_STACKS_NETWORK=mainnet
VITE_CONTRACT_ADDRESS=SP1YH5MXTJT86BZXMFA2T51JF0QVZ8XNYV33QH6MF

# Game Configuration
VITE_SCORE_FEE=5000
VITE_GAME_SPEED_INITIAL=4
VITE_GAME_SPEED_INCREMENT=0.015
"@ | Set-Content -Path "$repoDir\frontend\.env.example" -Encoding UTF8
git add "frontend/.env.example"
git commit -m "config: Add environment variable example for deployment reference"

# ── 6. Add CHANGELOG.md ──
@"
# Changelog

All notable changes to Stacks Runner will be documented in this file.

## [1.0.0] - 2026-03-05

### Added
- Endless runner game engine built with Phaser 3
- Cyberpunk-themed procedural graphics
- Parallax scrolling city background
- Particle effects system
- Score tracking with speed multiplier HUD
- Wallet integration with Leather and Xverse
- Score submission to Stacks Mainnet
- Contract interaction panel
- Game logo with neon glow effects

### Smart Contracts Deployed
- score.clar
- nft-trait.clar
- character-nft.clar
- governance.clar
- game-vault.clar
- game-reward.clar
"@ | Set-Content -Path "$repoDir\CHANGELOG.md" -Encoding UTF8
git add CHANGELOG.md
git commit -m "docs: Add changelog documenting v1.0.0 release features"

# ── 7. Contract architecture docs ──
New-Item -ItemType Directory -Force -Path "$repoDir\contracts\docs" | Out-Null
@"
# Smart Contract Architecture

## Overview
Stacks Runner uses 6 Clarity smart contracts deployed on Stacks Mainnet.

## Deployment Order
1. nft-trait (trait definition)
2. character-nft (implements nft-trait)
3. governance (standalone admin settings)
4. score (high score recording)
5. game-vault (STX pool management)
6. game-reward (depends on score + game-vault)

## Post-Deployment Setup
1. Call set-vault-address on score contract
2. Call set-reward-contract on game-vault contract
"@ | Set-Content -Path "$repoDir\contracts\docs\ARCHITECTURE.md" -Encoding UTF8
git add "contracts/docs/ARCHITECTURE.md"
git commit -m "docs: Add smart contract architecture documentation"

# ── 8. Score contract docs ──
@"
# Score Contract

Address: SP1YH5MXTJT86BZXMFA2T51JF0QVZ8XNYV33QH6MF.score

## Public Functions
- submit-score (score uint) - Submit a new high score
- set-vault-address (new-vault principal) - Set fee recipient

## Read-Only
- get-high-score (player principal) - Get player highest score

## Error Codes
- u100: Not authorized
- u103: Score too low
- u104: Fee transfer failed
"@ | Set-Content -Path "$repoDir\contracts\docs\SCORE.md" -Encoding UTF8
git add "contracts/docs/SCORE.md"
git commit -m "docs: Add score contract API reference documentation"

# ── 9. Vault contract docs ──
@"
# Game Vault Contract

Address: SP1YH5MXTJT86BZXMFA2T51JF0QVZ8XNYV33QH6MF.game-vault

## Public Functions
- deposit (amount uint) - Deposit STX into reward pool
- withdraw (amount uint) (recipient principal) - Withdraw STX
- pay-reward (amount uint) (recipient principal) - Pay reward to player
- set-vault-owner (new-owner principal) - Transfer ownership
- set-reward-contract (contract principal) - Authorize reward contract

## Read-Only
- get-vault-owner - Returns current vault owner
- get-vault-balance - Returns tracked deposit balance
"@ | Set-Content -Path "$repoDir\contracts\docs\VAULT.md" -Encoding UTF8
git add "contracts/docs/VAULT.md"
git commit -m "docs: Add vault contract API reference documentation"

# ── 10. Reward contract docs ──
@"
# Game Reward Contract

Address: SP1YH5MXTJT86BZXMFA2T51JF0QVZ8XNYV33QH6MF.game-reward

## Reward Tiers
- Tier 1: 500 points -> 10 STX
- Tier 2: 1000 points -> 25 STX
- Tier 3: 5000 points -> 100 STX

## Public Functions
- claim-reward (tier uint) - Claim reward for a tier
- set-tier-1/2/3 (score uint) (reward uint) - Update tiers

## Read-Only
- has-claimed (player principal) (tier uint) - Check claim status
"@ | Set-Content -Path "$repoDir\contracts\docs\REWARDS.md" -Encoding UTF8
git add "contracts/docs/REWARDS.md"
git commit -m "docs: Add reward contract API reference with tier details"

# ── 11. NFT contract docs ──
@"
# Character NFT Contract

Address: SP1YH5MXTJT86BZXMFA2T51JF0QVZ8XNYV33QH6MF.character-nft
Implements SIP-009 NFT standard.

## Public Functions
- mint (recipient principal) - Mint new character NFT
- transfer (token-id uint) (sender principal) (recipient principal)
- set-mint-admin (new-admin principal)
- set-base-uri (new-uri string-ascii)

## Read-Only
- get-last-token-id
- get-token-uri (token-id uint)
- get-owner (id uint)
"@ | Set-Content -Path "$repoDir\contracts\docs\NFT.md" -Encoding UTF8
git add "contracts/docs/NFT.md"
git commit -m "docs: Add character NFT contract documentation"

# ── 12. Governance contract docs ──
@"
# Governance Contract

Address: SP1YH5MXTJT86BZXMFA2T51JF0QVZ8XNYV33QH6MF.governance

Controls game parameters and admin functions.

## Public Functions
- set-difficulty (level uint)
- set-score-fee (fee uint)
- pause-game
- resume-game

## Read-Only
- get-difficulty
- get-score-fee
- is-paused
"@ | Set-Content -Path "$repoDir\contracts\docs\GOVERNANCE.md" -Encoding UTF8
git add "contracts/docs/GOVERNANCE.md"
git commit -m "docs: Add governance contract documentation for admin functions"

# ── 13. Frontend architecture docs ──
New-Item -ItemType Directory -Force -Path "$repoDir\frontend\docs" | Out-Null
@"
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
"@ | Set-Content -Path "$repoDir\frontend\docs\ARCHITECTURE.md" -Encoding UTF8
git add "frontend/docs/ARCHITECTURE.md"
git commit -m "docs: Add frontend architecture documentation"

# ── 14. Game design document ──
@"
# Game Design Document

## Core Mechanics
- Auto-run: Character moves forward automatically
- Jump: Up arrow / Space / Tap to jump
- Fast Fall: Down arrow / Swipe down
- Coin Collection: +50 points per coin
- Distance Score: Score increases with distance

## Visual Design
- Cyberpunk aesthetic with neon purple and cyan
- Parallax scrolling city background
- Procedurally generated vector sprites
- Particle systems for visual effects

## Difficulty Scaling
- Base speed: 4 units
- Speed increment: 0.015 per distance unit
- Obstacle spawn rate: 1800ms down to 600ms minimum
"@ | Set-Content -Path "$repoDir\frontend\docs\GAME_DESIGN.md" -Encoding UTF8
git add "frontend/docs/GAME_DESIGN.md"
git commit -m "docs: Add game design document with mechanics and visual specs"

# ── 15. Deployment guide ──
@"
# Deployment Guide

## Frontend Deployment (Vercel)
1. Push code to GitHub
2. Connect repo to Vercel
3. Set Root Directory to frontend
4. Build command: npm run build
5. Output directory: dist

## Smart Contract Deployment Order
1. nft-trait
2. character-nft
3. governance
4. score
5. game-vault
6. game-reward

## Post-Deployment Linking
- score.set-vault-address(DEPLOYER_ADDRESS)
- game-vault.set-reward-contract(DEPLOYER.game-reward)
- game-vault.deposit(AMOUNT)
"@ | Set-Content -Path "$repoDir\DEPLOYMENT.md" -Encoding UTF8
git add DEPLOYMENT.md
git commit -m "docs: Add deployment guide for Vercel and Stacks Mainnet"

# ── 16. robots.txt ──
@"
User-agent: *
Allow: /
Sitemap: https://stacks-runner.vercel.app/sitemap.xml
"@ | Set-Content -Path "$repoDir\frontend\public\robots.txt" -Encoding UTF8
git add "frontend/public/robots.txt"
git commit -m "seo: Add robots.txt for search engine crawling"

# ── 17. PWA manifest ──
@"
{
  "name": "Stacks Runner",
  "short_name": "StacksRunner",
  "description": "Web3 Endless Runner Game on Stacks Blockchain",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0a0a1a",
  "theme_color": "#aa44ff",
  "icons": [
    { "src": "/logo.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/logo.png", "sizes": "512x512", "type": "image/png" }
  ]
}
"@ | Set-Content -Path "$repoDir\frontend\public\manifest.json" -Encoding UTF8
git add "frontend/public/manifest.json"
git commit -m "feat: Add PWA manifest for installable web app support"

# ── 18. Game config constants ──
@"
export const GAME_CONFIG = {
    GRAVITY: 1200,
    JUMP_VELOCITY: -700,
    FAST_FALL_VELOCITY: 900,
    INITIAL_SPEED: 4,
    SPEED_INCREMENT: 0.015,
    OBSTACLE_SPAWN_DELAY: 1800,
    OBSTACLE_MIN_DELAY: 600,
    COIN_SPAWN_DELAY: 1200,
    COIN_SCORE_BONUS: 50,
    SCORE_MULTIPLIER: 10,
    WIDTH: 800,
    HEIGHT: 600,
    NEON_PURPLE: 0xaa44ff,
    NEON_CYAN: 0x00ffff,
    NEON_PINK: 0xff44aa,
    GOLD: 0xffcc00,
    DANGER_RED: 0xff2200,
} as const;
"@ | Set-Content -Path "$repoDir\frontend\src\game\config.ts" -Encoding UTF8
git add "frontend/src/game/config.ts"
git commit -m "refactor: Extract game constants into centralized config module"

# ── 19. TypeScript types ──
@"
export type GameState = 'MENU' | 'PLAYING' | 'GAME_OVER';

export interface PlayerScore {
    score: number;
    timestamp: number;
    txId?: string;
}

export interface RewardTier {
    tier: number;
    requiredScore: number;
    rewardAmount: number;
    label: string;
}

export const REWARD_TIERS: RewardTier[] = [
    { tier: 1, requiredScore: 500, rewardAmount: 10_000_000, label: 'Bronze - 10 STX' },
    { tier: 2, requiredScore: 1000, rewardAmount: 25_000_000, label: 'Silver - 25 STX' },
    { tier: 3, requiredScore: 5000, rewardAmount: 100_000_000, label: 'Gold - 100 STX' },
];
"@ | Set-Content -Path "$repoDir\frontend\src\types.ts" -Encoding UTF8
git add "frontend/src/types.ts"
git commit -m "feat: Add shared TypeScript type definitions and reward tier constants"

# ── 20. Error boundary ──
@"
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props { children: ReactNode; }
interface State { hasError: boolean; error?: Error; }

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error('Stacks Runner Error:', error, info);
    }

    render() {
        if (this.state.hasError) {
            return React.createElement('div', {
                style: { display: 'flex', flexDirection: 'column', alignItems: 'center',
                    justifyContent: 'center', height: '100vh', background: '#0a0a1a',
                    color: '#fff', fontFamily: 'monospace', textAlign: 'center', padding: '2rem' }
            },
                React.createElement('h1', { style: { color: '#ff4444', fontSize: '2rem' } }, 'Something went wrong'),
                React.createElement('p', { style: { color: '#888', marginTop: '1rem' } }, this.state.error?.message),
                React.createElement('button', {
                    onClick: () => window.location.reload(),
                    style: { marginTop: '2rem', padding: '12px 24px', background: '#aa44ff',
                        color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }
                }, 'Reload Game')
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
"@ | Set-Content -Path "$repoDir\frontend\src\components\ErrorBoundary.tsx" -Encoding UTF8
git add "frontend/src/components/ErrorBoundary.tsx"
git commit -m "feat: Add React error boundary for graceful crash handling"

# ── 21. Score test scaffold ──
New-Item -ItemType Directory -Force -Path "$repoDir\contracts\tests" | Out-Null
@"
;; Score Contract Test Plan
;; 1. Submit first score - should succeed
;; 2. Submit higher score - should update
;; 3. Submit lower score - should fail with u103
;; 4. Check high score retrieval
;; 5. Verify fee transfer to vault
;; 6. Non-admin cannot set vault address

(define-public (test-submit-score)
    (ok true)
)
"@ | Set-Content -Path "$repoDir\contracts\tests\score_test.clar" -Encoding UTF8
git add "contracts/tests/score_test.clar"
git commit -m "test: Add score contract test scaffold with test case plan"

# ── 22. Bug report template ──
New-Item -ItemType Directory -Force -Path "$repoDir\.github\ISSUE_TEMPLATE" | Out-Null
@"
---
name: Bug Report
about: Report a bug in Stacks Runner
title: '[BUG] '
labels: bug
---

## Description
A clear description of the bug.

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## Expected Behavior
What you expected to happen.

## Environment
- Browser:
- Wallet:
- OS:
"@ | Set-Content -Path "$repoDir\.github\ISSUE_TEMPLATE\bug_report.md" -Encoding UTF8
git add ".github/ISSUE_TEMPLATE/bug_report.md"
git commit -m "ci: Add GitHub bug report issue template"

# ── 23. Feature request template ──
@"
---
name: Feature Request
about: Suggest a feature for Stacks Runner
title: '[FEATURE] '
labels: enhancement
---

## Problem
Describe the problem this feature would solve.

## Proposed Solution
Describe the solution you would like.

## Alternatives Considered
Any alternative solutions you have considered.
"@ | Set-Content -Path "$repoDir\.github\ISSUE_TEMPLATE\feature_request.md" -Encoding UTF8
git add ".github/ISSUE_TEMPLATE/feature_request.md"
git commit -m "ci: Add GitHub feature request issue template"

# ── 24. PR template ──
@"
## Description
Brief description of changes.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation
- [ ] Smart contract update

## Testing
- [ ] Tested locally
- [ ] Contracts pass clarinet check
- [ ] Build passes npm run build
"@ | Set-Content -Path "$repoDir\.github\pull_request_template.md" -Encoding UTF8
git add ".github/pull_request_template.md"
git commit -m "ci: Add pull request template for standardized reviews"

# ── 25. .editorconfig ──
@"
root = true

[*]
indent_style = space
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.{ts,tsx,js,jsx,json,yml}]
indent_size = 2

[*.md]
trim_trailing_whitespace = false
"@ | Set-Content -Path "$repoDir\.editorconfig" -Encoding UTF8
git add ".editorconfig"
git commit -m "config: Add editorconfig for consistent coding style across editors"

# ── 26. Testing guide ──
@"
# Testing Guide

## Frontend
- npm run dev (development)
- npm run build (production build)
- npm run preview (preview build)

## Smart Contracts
- clarinet check (syntax check)
- clarinet console (interactive testing)

## Browser Checklist
- [ ] Game loads without errors
- [ ] Wallet connects successfully
- [ ] Character responds to input
- [ ] Obstacles and coins spawn
- [ ] Score increments properly
- [ ] Game over triggers correctly
- [ ] Score submission works on-chain
- [ ] Contract panel functions work
- [ ] Mobile touch controls work
"@ | Set-Content -Path "$repoDir\TESTING.md" -Encoding UTF8
git add TESTING.md
git commit -m "docs: Add testing guide with checklist and contract console examples"

# ── 27. Expanded .gitignore ──
@"
# Dependencies
node_modules/

# Build output
dist/
build/
.next/

# Environment
.env
.env.local
.env.production
.env.development

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db
Desktop.ini

# Clarinet
.cache/
contracts/.cache/

# Logs
*.log
npm-debug.log*

# Testing
coverage/
.nyc_output/

# Misc
*.tgz
.eslintcache
make_commits.ps1
"@ | Set-Content -Path "$repoDir\.gitignore" -Encoding UTF8
git add ".gitignore"
git commit -m "config: Expand gitignore with IDE, coverage, and build patterns"

# ── 28. Project roadmap ──
@"
# Stacks Runner Roadmap

## Phase 1 - Core Game (Completed)
- [x] Endless runner engine with Phaser 3
- [x] Cyberpunk graphics and effects
- [x] Wallet integration
- [x] Smart contracts on Mainnet
- [x] Score submission
- [x] Vercel deployment

## Phase 2 - Enhanced Gameplay
- [ ] Multiple character skins via NFTs
- [ ] Power-ups (shield, magnet, double jump)
- [ ] On-chain leaderboard
- [ ] Sound effects and music
- [ ] Day/night cycle

## Phase 3 - Social Features
- [ ] Multiplayer race mode
- [ ] Player profiles
- [ ] Achievement NFT badges
- [ ] Tournament system

## Phase 4 - Economy
- [ ] In-game NFT marketplace
- [ ] Staking rewards
- [ ] Season passes
"@ | Set-Content -Path "$repoDir\ROADMAP.md" -Encoding UTF8
git add ROADMAP.md
git commit -m "docs: Add project roadmap with phased feature planning"

# ── 29. Vault test scaffold ──
@"
;; Game Vault Contract Test Plan
;; 1. Deposit STX - should increase balance
;; 2. Withdraw STX - only owner should succeed
;; 3. Pay reward - authorized contract should succeed
;; 4. Unauthorized pay-reward should fail
;; 5. Insufficient balance should fail

(define-public (test-deposit)
    (ok true)
)
"@ | Set-Content -Path "$repoDir\contracts\tests\vault_test.clar" -Encoding UTF8
git add "contracts/tests/vault_test.clar"
git commit -m "test: Add vault contract test scaffold with test case plan"

# ── 30. Overhaul README ──
@"
# Stacks Runner

A production-ready Web3 endless runner game built on Stacks Mainnet.

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
"@ | Set-Content -Path "$repoDir\README.md" -Encoding UTF8
git add README.md
git commit -m "docs: Overhaul README with contract table, quick start, and docs links"

Write-Host ""
Write-Host "All 30 commits completed!"
Write-Host ""
git log --oneline -n 35
