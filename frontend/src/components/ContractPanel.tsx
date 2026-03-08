// @ts-nocheck
import React, { useState } from 'react';
import { request } from '@stacks/connect';
import { uintCV, principalCV } from '@stacks/transactions';
import { CONTRACT_ADDRESS, CONTRACTS } from '../utils/stacks';

interface ContractPanelProps {
    onClose: () => void;
}

export const ContractPanel: React.FC<ContractPanelProps> = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState<'nft' | 'governance' | 'score' | 'reward'>('nft');
    const [status, setStatus] = useState<string | null>(null);
    const [txHash, setTxHash] = useState<string | null>(null);

    const showResult = (msg: string, txid?: string) => {
        setStatus(msg);
        if (txid) setTxHash(txid);
        setTimeout(() => setStatus(null), 5000);
    };

    // ─── NFT Functions ───
    const mintNFT = async () => {
        try {
            const addr = localStorage.getItem('stx-address');
            if (!addr) return showResult('❌ Connect wallet first');
            const response: any = await request('stx_callContract', {
                contract: CONTRACTS.characterNft,
                functionName: 'mint',
                functionArgs: [principalCV(addr)],
            });
            showResult('✅ NFT Mint submitted!', response?.txid || response?.txId);
        } catch (e: any) {
            showResult('❌ ' + (e.message || 'Mint failed'));
        }
    };

    const mintOpenNFT = async () => {
        try {
            const addr = localStorage.getItem('stx-address');
            if (!addr) return showResult('❌ Connect wallet first');
            const response: any = await request('stx_callContract', {
                contract: CONTRACTS.openMintNft,
                functionName: 'mint',
                functionArgs: [principalCV(addr)],
            });
            showResult('✅ Open NFT Mint submitted!', response?.txid || response?.txId);
        } catch (e: any) {
            showResult('❌ ' + (e.message || 'Open Mint failed'));
        }
    };

    // ─── Governance Functions ───
    const pauseGame = async () => {
        try {
            const response: any = await request('stx_callContract', {
                contract: CONTRACTS.governance,
                functionName: 'pause-game',
                functionArgs: [],
            });
            showResult('✅ Pause submitted!', response?.txid || response?.txId);
        } catch (e: any) {
            showResult('❌ ' + (e.message || 'Pause failed'));
        }
    };

    const resumeGame = async () => {
        try {
            const response: any = await request('stx_callContract', {
                contract: CONTRACTS.governance,
                functionName: 'resume-game',
                functionArgs: [],
            });
            showResult('✅ Resume submitted!', response?.txid || response?.txId);
        } catch (e: any) {
            showResult('❌ ' + (e.message || 'Resume failed'));
        }
    };

    const updateDifficulty = async (level: number) => {
        try {
            const response: any = await request('stx_callContract', {
                contract: CONTRACTS.governance,
                functionName: 'set-difficulty',
                functionArgs: [uintCV(level)],
            });
            showResult('✅ Difficulty updated!', response?.txid || response?.txId);
        } catch (e: any) {
            showResult('❌ ' + (e.message || 'Update failed'));
        }
    };

    const updateScoreFee = async (fee: number) => {
        try {
            const response: any = await request('stx_callContract', {
                contract: CONTRACTS.governance,
                functionName: 'set-score-fee',
                functionArgs: [uintCV(fee)],
            });
            showResult('✅ Fee updated!', response?.txid || response?.txId);
        } catch (e: any) {
            showResult('❌ ' + (e.message || 'Update failed'));
        }
    };

    // ─── Reward Functions ───
    const claimReward = async (tier: number) => {
        try {
            const response: any = await request('stx_callContract', {
                contract: CONTRACTS.reward,
                functionName: 'claim-reward',
                functionArgs: [uintCV(tier)],
                postConditionMode: 'allow',
            });
            showResult('✅ Reward claim submitted!', response?.txid || response?.txId);
        } catch (e: any) {
            showResult('❌ ' + (e.message || 'Claim failed'));
        }
    };

    const tabs = [
        { id: 'nft' as const, label: '🎨 NFT', color: 'purple' },
        { id: 'governance' as const, label: '⚙️ Admin', color: 'blue' },
        { id: 'score' as const, label: '🏆 Score', color: 'green' },
        { id: 'reward' as const, label: '💎 Rewards', color: 'yellow' },
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-lg mx-4 bg-gray-900 border border-gray-700 rounded-2xl shadow-[0_0_40px_rgba(147,51,234,0.3)] overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700 bg-gray-800/50">
                    <h2 className="text-xl font-bold text-white">📜 Contract Panel</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl leading-none">&times;</button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-700">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 py-3 text-sm font-bold transition-all ${activeTab === tab.id
                                ? 'text-white bg-gray-800 border-b-2 border-purple-500'
                                : 'text-gray-500 hover:text-gray-300'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                    {/* Status Alert */}
                    {status && (
                        <div className={`p-3 rounded-lg text-sm font-mono ${status.startsWith('✅') ? 'bg-green-900/30 text-green-400 border border-green-700' : 'bg-red-900/30 text-red-400 border border-red-700'}`}>
                            {status}
                            {txHash && (
                                <a href={`https://explorer.hiro.so/txid/${txHash}?chain=mainnet`} target="_blank" rel="noreferrer" className="block mt-1 text-xs underline text-blue-400">
                                    View on Explorer →
                                </a>
                            )}
                        </div>
                    )}

                    {/* NFT Tab */}
                    {activeTab === 'nft' && (
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-800 rounded-xl border border-purple-900/50">
                                <h3 className="text-purple-400 font-bold mb-1">Character NFT</h3>
                                <p className="text-xs text-gray-500 mb-3 font-mono break-all">{CONTRACTS.characterNft}</p>
                                <p className="text-sm text-gray-400 mb-4">Mint a unique Stacks Runner character NFT to your wallet.</p>
                                <button onClick={mintNFT} className="w-full py-3 font-bold text-white bg-purple-600 rounded-lg hover:bg-purple-500 transition shadow-[0_0_15px_rgba(147,51,234,0.4)]">
                                    🎨 Mint Character NFT
                                </button>
                            </div>
                            <div className="p-4 bg-gray-800 rounded-xl border border-cyan-900/50">
                                <h3 className="text-cyan-400 font-bold mb-1">Open Mint NFT</h3>
                                <p className="text-xs text-gray-500 mb-3 font-mono break-all">{CONTRACTS.openMintNft}</p>
                                <p className="text-sm text-gray-400 mb-4">Mint a Stacks Runner Open NFT — no admin required, anyone can mint!</p>
                                <button onClick={mintOpenNFT} className="w-full py-3 font-bold text-white bg-cyan-600 rounded-lg hover:bg-cyan-500 transition shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                                    🌟 Mint Open NFT
                                </button>
                            </div>
                            <p className="text-xs text-gray-600 text-center">Character NFT requires admin · Open Mint is available to everyone</p>
                        </div>
                    )}

                    {/* Governance Tab */}
                    {activeTab === 'governance' && (
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-800 rounded-xl border border-blue-900/50">
                                <h3 className="text-blue-400 font-bold mb-1">Game Controls</h3>
                                <p className="text-xs text-gray-500 mb-3 font-mono break-all">{CONTRACTS.governance}</p>
                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    <button onClick={pauseGame} className="py-2 font-bold text-white bg-red-600 rounded-lg hover:bg-red-500 transition text-sm">
                                        ⏸️ Pause Game
                                    </button>
                                    <button onClick={resumeGame} className="py-2 font-bold text-white bg-green-600 rounded-lg hover:bg-green-500 transition text-sm">
                                        ▶️ Resume Game
                                    </button>
                                </div>
                            </div>
                            <div className="p-4 bg-gray-800 rounded-xl border border-blue-900/50">
                                <h3 className="text-blue-400 font-bold mb-3">Set Difficulty</h3>
                                <div className="grid grid-cols-3 gap-2">
                                    {[1, 2, 3, 5, 8, 10].map(level => (
                                        <button key={level} onClick={() => updateDifficulty(level)} className="py-2 text-sm font-bold text-white bg-blue-700 rounded hover:bg-blue-600 transition">
                                            Level {level}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="p-4 bg-gray-800 rounded-xl border border-blue-900/50">
                                <h3 className="text-blue-400 font-bold mb-3">Set Score Fee (microSTX)</h3>
                                <div className="grid grid-cols-3 gap-2">
                                    {[1000, 5000, 10000, 50000, 100000, 500000].map(fee => (
                                        <button key={fee} onClick={() => updateScoreFee(fee)} className="py-2 text-xs font-bold text-white bg-blue-700 rounded hover:bg-blue-600 transition">
                                            {(fee / 1000000).toFixed(3)} STX
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <p className="text-xs text-gray-600 text-center">Only the contract owner can use admin functions</p>
                        </div>
                    )}

                    {/* Score Tab */}
                    {activeTab === 'score' && (
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-800 rounded-xl border border-green-900/50">
                                <h3 className="text-green-400 font-bold mb-1">Score Contract</h3>
                                <p className="text-xs text-gray-500 mb-3 font-mono break-all">{CONTRACTS.score}</p>
                                <p className="text-sm text-gray-400 mb-2">Scores are automatically submitted when you click "Submit Score On-Chain" after a game.</p>
                                <a href={`https://explorer.hiro.so/txid/${CONTRACTS.score}?chain=mainnet`} target="_blank" rel="noreferrer" className="block w-full py-3 text-center font-bold text-white bg-green-700 rounded-lg hover:bg-green-600 transition">
                                    🔍 View on Explorer
                                </a>
                            </div>
                        </div>
                    )}

                    {/* Reward Tab */}
                    {activeTab === 'reward' && (
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-800 rounded-xl border border-yellow-900/50">
                                <h3 className="text-yellow-400 font-bold mb-1">Claim Rewards</h3>
                                <p className="text-xs text-gray-500 mb-3 font-mono break-all">{CONTRACTS.reward}</p>
                                <p className="text-sm text-gray-400 mb-4">Claim STX rewards based on your on-chain score tier.</p>
                                <div className="space-y-2">
                                    <button onClick={() => claimReward(1)} className="w-full py-3 font-bold text-white bg-yellow-700 rounded-lg hover:bg-yellow-600 transition text-sm">
                                        🥉 Tier 1 — 500 pts → 10 STX
                                    </button>
                                    <button onClick={() => claimReward(2)} className="w-full py-3 font-bold text-white bg-yellow-600 rounded-lg hover:bg-yellow-500 transition text-sm">
                                        🥈 Tier 2 — 1,000 pts → 25 STX
                                    </button>
                                    <button onClick={() => claimReward(3)} className="w-full py-3 font-bold text-white bg-yellow-500 rounded-lg hover:bg-yellow-400 transition text-sm">
                                        🥇 Tier 3 — 5,000 pts → 100 STX
                                    </button>
                                </div>
                                <p className="text-xs text-gray-600 mt-3 text-center">Requires vault to be funded and a qualifying on-chain score</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="px-6 py-3 border-t border-gray-700 bg-gray-800/30">
                    <p className="text-xs text-gray-600 text-center font-mono">
                        Deployer: {CONTRACT_ADDRESS.substring(0, 12)}...
                    </p>
                </div>
            </div>
        </div>
    );
};
