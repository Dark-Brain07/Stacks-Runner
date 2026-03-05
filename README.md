# Stacks Runner - Web3 Endless Game

An endless runner built with React, Phaser.js, and scaling on the Stacks blockchain with Clarity smart contracts.

## Overview
- **Frontend**: React + TypeScript + Vite + TailwindCSS + Phaser.js
- **Contracts**: Clarity 5 Smart Contract suite (Governance, Vault, SIP-009 NFT, Score Engine, Reward Distributor)
- **Web3 Integration**: `@stacks/connect`, `@stacks/network`, `@stacks/transactions`

## Deployment Instructions

### Smart Contracts (Stacks Mainnet/Testnet)
1. Navigate to `/contracts`.
2. Configure your testnet/mainnet `wallet` in Clarinet or the Hiro Platform.
3. Deploy the contracts in the following order to resolve dependencies:
   - `nft-trait.clar`
   - `character-nft.clar`
   - `vault.clar`
   - `score.clar`
   - `governance.clar`
   - `reward.clar`
4. Use the `clarinet deploy` command or Stacks Web Deployment sandbox.
5. Provide the deployed contract address string to the frontend in `src/utils/stacks.ts`.

### Frontend (Vercel)
1. Run `npm install` inside `/frontend` to verify dependencies.
2. Push the repository to GitHub.
3. Import the exact repository via Vercel.
4. Set the Framework Preset to **Vite**.
5. Build Command: `npm run build`
6. Publish.

## Security Considerations

1. **Vault Owner Segregation**: The `vault` is currently controlled by an owner or explicitly the `reward` contract. Do not share the owner private key. Use trait-based whitelisting for multiple contracts in production.
2. **Score Overwrites**: The `score` contract checks if `new-score > current-high-score` to prevent lower overwrite. It ensures players only pay the submittal fee if they actually beat their score.
3. **Transaction Phishing**: Always display an accurate expected fee (0.005 STX) in the frontend before users manually approve it in their Stacks wallet (Leather/Xverse). This implementation shows it prominently on the Game Over screen.
4. **Validating Real Scores**: Frontend physics executes client-side. To prevent cheating in a real competitive environment, validate the game inputs algorithmically off-chain and provide a cryptographic proof that the smart contract verifies during the `submit-score` execution. 

## Gas Optimization Tips (Clarity)

1. **Minimize Data Variables Re-writes**: Modifying `data-vars` costs a base gas fee. Only use `var-set` where necessary, primarily for initialization and rare game re-balances.
2. **Batching Map Updates**: If storing leaderboard entries, use a simple `(map-set)` instead of a list of high scores. A principal-to-highest-score map provides O(1) reads and minimal byte size on write.
3. **Optimized Fixed Fees**: Transferring inline variables (`u5000`) avoids an extra contract read step, saving read-gas for the score submission. In production, caching the `score-fee` offline and sending it as part of a post-condition bounds the network fee optimally.
4. **Use Print Statements Instead of Events List**: Rather than modifying an on-chain list of recent winners, standard `.clar` events `(print { event... })` are emitted for practically 0 gas, making it incredibly cheap for indexers like Hiro API to pick them up.
