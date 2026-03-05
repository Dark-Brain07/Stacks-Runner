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
