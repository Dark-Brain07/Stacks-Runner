import React from 'react';
import { WalletConnect } from './WalletConnect';

interface MainMenuProps {
    onStartGame: () => void;
    onOpenContracts: () => void;
    isConnected: boolean;
}

export const MainMenu: React.FC<MainMenuProps> = ({ onStartGame, onOpenContracts, isConnected }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full min-h-screen bg-gray-900 bg-opacity-90 absolute top-0 left-0 z-10 backdrop-blur-sm">
            <div className="absolute top-4 right-4">
                <WalletConnect />
            </div>

            <div className="flex flex-col items-center max-w-lg p-10 bg-gray-800 border border-gray-700 rounded-2xl shadow-[0_0_50px_rgba(147,51,234,0.3)]">
                <h1 className="mb-2 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Stacks Runner
                </h1>
                <p className="mb-8 text-gray-400">Web3 Endless Runner on Stacks</p>

                <button
                    onClick={onStartGame}
                    className="px-12 py-4 mb-4 text-xl font-bold text-white transition-all transform bg-gradient-to-r from-green-400 to-emerald-600 rounded-full shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(52,211,153,0.6)]"
                >
                    {isConnected ? 'PLAY NOW' : '⚡ QUICK PLAY'}
                </button>

                <button
                    onClick={onOpenContracts}
                    className="px-8 py-3 mb-2 text-sm font-bold text-purple-300 transition-all border border-purple-600 rounded-full hover:bg-purple-900/30 hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                >
                    📜 Smart Contracts
                </button>

                {!isConnected && (
                    <p className="text-xs text-yellow-500 mb-2">Connect wallet to submit scores on-chain</p>
                )}

                <div className="mt-8 space-y-2 text-sm text-gray-400">
                    <p>🎮 Use Arrow Keys or Swipe to Move/Jump</p>
                    <p>💰 Submit scores to earn STX and NFTs</p>
                    <p>⚠️ Score submission fee: 0.005 STX</p>
                </div>
            </div>
        </div>
    );
};
