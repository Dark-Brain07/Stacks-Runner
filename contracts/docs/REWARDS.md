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
