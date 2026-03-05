import React, { useState, useEffect } from 'react';
import { MainMenu } from './components/MainMenu';
import { GameOverModal } from './components/GameOverModal';
import { ContractPanel } from './components/ContractPanel';
import { isConnected } from './components/WalletConnect';
import GameArea from './game/GameArea';

function App() {
  const [gameState, setGameState] = useState<'MENU' | 'PLAYING' | 'GAME_OVER'>('MENU');
  const [score, setScore] = useState(0);
  const [walletConnected, setWalletConnected] = useState(false);
  const [showContracts, setShowContracts] = useState(false);

  useEffect(() => {
    setWalletConnected(isConnected());
  }, []);

  const handleStartGame = () => {
    setScore(0);
    setGameState('PLAYING');
  };

  const handleGameOver = (finalScore: number) => {
    setScore(finalScore);
    setGameState('GAME_OVER');
  };

  const handleBackToMenu = () => {
    setGameState('MENU');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#111]">
      {/* The Phaser Game Canvas wrapper */}
      {gameState !== 'MENU' && (
        <GameArea onGameOver={handleGameOver} />
      )}

      {/* UI Overlays */}
      {gameState === 'MENU' && (
        <MainMenu
          onStartGame={handleStartGame}
          onOpenContracts={() => setShowContracts(true)}
          isConnected={walletConnected}
        />
      )}

      {gameState === 'GAME_OVER' && (
        <GameOverModal
          score={score}
          onRestart={handleStartGame}
          onBackToMenu={handleBackToMenu}
        />
      )}

      {/* Contract Interaction Panel */}
      {showContracts && (
        <ContractPanel onClose={() => setShowContracts(false)} />
      )}
    </div>
  );
}

export default App;
