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
