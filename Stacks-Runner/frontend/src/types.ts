/** Global game state enum reflecting React component lifecycles */
﻿export type GameState = 'MENU' | 'PLAYING' | 'GAME_OVER';

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
