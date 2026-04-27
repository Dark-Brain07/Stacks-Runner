import React, { useState } from 'react';
import { request } from '@stacks/connect';
import { uintCV } from '@stacks/transactions';
import { CONTRACT_ADDRESS } from '../utils/stacks';

interface GameOverModalProps {
    score: number;
    onRestart: () => void;
    onBackToMenu: () => void;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({ score, onRestart, onBackToMenu }) => {
    const [txId, setTxId] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState(false);

    const submitScore = async () => {
        if (score <= 0) {
            alert('Score must be greater than 0 to submit on-chain.');
            return;
        }
        try {
            setSubmitting(true);
            const response: any = await request('stx_callContract', {
                contract: `${CONTRACT_ADDRESS}.score`,
                functionName: 'submit-score',
                functionArgs: [uintCV(score)],
                postConditionMode: 'allow',
            });

            if (response && response.txid) {
                setTxId(response.txid);
            } else if (response && response.txId) {
                setTxId(response.txId);
            }
        } catch (e: any) {
            console.error('Score submission failed:', e);
            const msg = e?.message || 'Unknown error';
            if (msg.includes('score-too-low') || msg.includes('u103')) {
                alert('This score is lower than your current on-chain high score. Only higher scores can be submitted!');
            } else if (msg.includes('fee-failed') || msg.includes('u104')) {
                alert('Fee transfer failed. Make sure you have at least 0.005 STX in your wallet.');
            } else {
                alert('Score submission failed: ' + msg);
            }
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center min-h-screen bg-black/60 backdrop-blur-md animate-fade-in">
            <div className="relative flex flex-col items-center max-w-md p-10 overflow-hidden transition-all duration-500 bg-gray-900/80 border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(239,68,68,0.3)] backdrop-blur-xl group hover:shadow-[0_0_60px_rgba(239,68,68,0.5)]">
                {/* Animated Gradient Background Glow */}
                <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute w-64 h-64 bg-red-600/20 rounded-full blur-3xl -top-32 -right-32 animate-pulse"></div>
                <div className="absolute w-64 h-64 bg-purple-600/20 rounded-full blur-3xl -bottom-32 -left-32 animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="mb-2 text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-red-600 drop-shadow-lg tracking-wider">GAME OVER</h2>
                    <p className="mb-8 text-xl font-medium text-gray-300">Final Score: <span className="font-mono text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 drop-shadow-md">{score}</span></p>

                    {txId ? (
                        <div className="p-5 mb-8 text-center border rounded-xl border-emerald-500/30 bg-emerald-900/30 text-emerald-300 backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0.2)] w-full">
                            <p className="mb-2 text-lg font-bold">Score Submitted!</p>
                            <a
                                href={`https://explorer.hiro.so/txid/${txId}?chain=mainnet`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm font-medium transition-colors hover:text-emerald-100 underline decoration-emerald-500/50 underline-offset-4"
                            >
                                View on Stacks Explorer
                            </a>
                        </div>
                    ) : (
                        <div className="flex flex-col w-full mb-8 space-y-3">
                            <button
                                onClick={submitScore}
                                disabled={submitting}
                                className="relative px-8 py-4 overflow-hidden font-bold tracking-wide text-white transition-all rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 active:translate-y-0"
                            >
                                <span className="relative z-10">{submitting ? 'Submitting...' : 'Submit Score On-Chain'}</span>
                                <div className="absolute inset-0 w-full h-full bg-white/20 opacity-0 hover:opacity-100 transition-opacity"></div>
                            </button>
                            <p className="text-xs font-medium text-center text-gray-400">Requires 0.005 STX network fee</p>
                        </div>
                    )}

                    <div className="flex w-full space-x-4">
                        <button
                            onClick={onRestart}
                            className="flex-1 px-6 py-3 font-bold tracking-wide text-white transition-all bg-gray-800 border border-gray-700 rounded-xl hover:bg-gray-700 hover:border-gray-500 hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0"
                        >
                            Play Again
                        </button>
                        <button
                            onClick={onBackToMenu}
                            className="flex-1 px-6 py-3 font-bold tracking-wide text-gray-300 transition-all bg-transparent border border-gray-700 rounded-xl hover:bg-white/5 hover:border-gray-500 hover:text-white transform hover:-translate-y-1 active:translate-y-0"
                        >
                            Main Menu
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
