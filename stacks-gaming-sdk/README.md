# @rajuice/stacks-gaming-sdk

Production-grade SDK for building blockchain games on the **Stacks** network. Built with TypeScript, powered by Clarity smart contracts and Hiro Chainhooks.

## Features

- **Wallet Auth** — Multi-wallet support (Leather, Xverse, Hiro) with session management
- **Smart Contracts** — Pre-built contract callers for scores, NFTs, and STX rewards
- **Chainhooks** — Real-time on-chain event streaming via Hiro Chainhooks
- **Analytics** — Player stats, on-chain transaction tracking, event system
- **Leaderboards** — Season-based ranking with on-chain score verification
- **TypeScript** — Full type safety with comprehensive type definitions

## Installation

```bash
npm install @rajuice/stacks-gaming-sdk
```

## Quick Start

```typescript
import { WalletProvider, ScoreContract, Leaderboard } from '@rajuice/stacks-gaming-sdk';

// Connect wallet
const wallet = new WalletProvider({
  appName: 'My Game',
  appIconUrl: 'https://mygame.com/icon.png',
  network: 'mainnet'
});
const address = await wallet.connect();

// Submit score on-chain
const scores = new ScoreContract('SP2...YOUR_ADDRESS');
const args = scores.submitScoreArgs(address, 42000, 'level-1');

// Track leaderboard
const lb = new Leaderboard();
lb.submit(address, 42000);
console.log(lb.getTop(10));
```

## Chainhooks Integration

```typescript
import { ChainHookConfig, WebhookHandler } from '@rajuice/stacks-gaming-sdk';

const config = ChainHookConfig.nftEvent('https://api.mygame.com/webhook', 'my-api-key');
const handler = new WebhookHandler();
handler.register('nft_mint', (event) => console.log('NFT minted:', event));
```

## Architecture

```
stacks-gaming-sdk/
├── src/
│   ├── wallet/        # Wallet authentication & session
│   ├── contracts/     # Clarity contract interaction
│   ├── analytics/     # Player stats & tracking
│   ├── chainhooks/    # Hiro Chainhooks integration
│   ├── leaderboard/   # Rankings & seasons
│   └── index.ts       # Main entry point
├── docs/              # API documentation
└── examples/          # Usage examples
```

## Built on Stacks

- Native Stacks blockchain integration
- Clarity smart contract interaction via `@stacks/transactions`
- Hiro Chainhooks for real-time event streaming
- Multi-wallet support via `@stacks/connect`
- Mainnet & Testnet support

## License

MIT © Dark-Brain07
.................
