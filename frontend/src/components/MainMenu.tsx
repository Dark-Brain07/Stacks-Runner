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
                {/* Game Logo */}
                <img
                    src="/assets/logo.png"
                    alt="Stacks Runner"
                    className="w-64 h-auto mb-6 drop-shadow-[0_0_20px_rgba(147,51,234,0.5)]"
                />

                <p className="mb-8 text-gray-400">Web3 Endless Runner on Stacks</p>

                <button
                    onClick={onStartGame}
                    className="px-12 py-4 mb-4 text-xl font-bold text-white transition-all transform bg-gradient-to-r from-green-400 to-emerald-600 rounded-full shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(52,211,153,0.6)]"
                >
                    {isConnected ? 'PLAY NOW' : '⚡ QUICK PLAY'}
                </button>

                <button
                    onClick={onOpenContracts}
                    className="px-8 py-3 mb-6 text-sm font-bold text-purple-300 transition-all border border-purple-600 rounded-full hover:bg-purple-900/30 hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                >
                    📜 Smart Contracts
                </button>

                <a
                    href="https://rocket-shooter-seven.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 mb-2 text-lg font-black text-white transition-all transform animate-pulse bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 rounded-2xl shadow-[0_0_30px_rgba(244,63,94,0.6)] hover:scale-105"
                >
                    🚀 Check Rocket Shooter Game now
                </a>

                {!isConnected && (
                    <p className="text-xs text-yellow-500 mb-2 mt-4">Connect wallet to submit scores on-chain</p>
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
