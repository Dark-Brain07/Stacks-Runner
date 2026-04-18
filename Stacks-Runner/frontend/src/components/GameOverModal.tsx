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
        <div className="flex flex-col items-center justify-center w-full h-full min-h-screen bg-black bg-opacity-80 absolute top-0 left-0 z-20">
            <div className="flex flex-col items-center max-w-md p-8 bg-gray-900 border-2 border-red-900 rounded-xl shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                <h2 className="mb-2 text-4xl font-bold text-red-500">GAME OVER</h2>
                <p className="mb-6 text-xl text-white">Final Score: <span className="font-mono text-3xl text-purple-400">{score}</span></p>

                {txId ? (
                    <div className="p-4 mb-6 text-center border rounded border-emerald-600 bg-emerald-900 bg-opacity-20 text-emerald-400">
                        <p className="mb-2 font-bold">Score Submitted!</p>
                        <a
                            href={`https://explorer.hiro.so/txid/${txId}?chain=mainnet`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs underline"
                        >
                            View on Stacks Explorer
                        </a>
                    </div>
                ) : (
                    <div className="flex flex-col w-full space-y-3 mb-6">
                        <button
                            onClick={submitScore}
                            disabled={submitting}
                            className="px-6 py-3 font-bold text-white transition-all bg-purple-600 rounded hover:bg-purple-500 shadow-[0_0_10px_rgba(147,51,234,0.5)] disabled:opacity-50"
                        >
                            {submitting ? 'Submitting...' : 'Submit Score On-Chain'}
                        </button>
                        <p className="text-xs text-center text-gray-500">Requires 0.005 STX network fee</p>
                    </div>
                )}

                <div className="flex w-full space-x-4">
                    <button
                        onClick={onRestart}
                        className="flex-1 px-4 py-2 font-bold text-white transition bg-gray-700 rounded hover:bg-gray-600"
                    >
                        Play Again
                    </button>
                    <button
                        onClick={onBackToMenu}
                        className="flex-1 px-4 py-2 font-bold text-gray-300 transition bg-transparent border border-gray-600 rounded hover:bg-gray-800"
                    >
                        Main Menu
                    </button>
                </div>
            </div>
        </div>
    );
};
