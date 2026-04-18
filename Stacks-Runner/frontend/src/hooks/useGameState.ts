import { useState, useCallback } from 'react';
import type { GameState } from '../types';
export function useGameState(initial: GameState = 'MENU') {
  const [state, setState] = useState<GameState>(initial);
  const [score, setScore] = useState(0);
  const startGame = useCallback(() => { setScore(0); setState('PLAYING'); }, []);
  const endGame = useCallback((finalScore: number) => { setScore(finalScore); setState('GAME_OVER'); }, []);
  const backToMenu = useCallback(() => { setState('MENU'); }, []);
  return { state, score, startGame, endGame, backToMenu };
}