export interface TutorialStep { id: string; title: string; message: string; position: 'top' | 'center' | 'bottom'; }
export const TUTORIAL_STEPS: TutorialStep[] = [
  { id: 'welcome', title: 'Welcome to Stacks Runner!', message: 'An endless runner on the Stacks blockchain.', position: 'center' },
  { id: 'move', title: 'How to Move', message: 'Press SPACE or tap to jump over obstacles.', position: 'bottom' },
  { id: 'coins', title: 'Collect Coins', message: 'Grab coins to increase your score.', position: 'center' },
  { id: 'obstacles', title: 'Watch Out!', message: 'Avoid obstacles or you lose a life.', position: 'center' },
  { id: 'powerups', title: 'Power-Ups', message: 'Collect power-ups for special abilities.', position: 'center' },
  { id: 'wallet', title: 'Connect Wallet', message: 'Connect your Stacks wallet to submit scores on-chain.', position: 'top' },
  { id: 'submit', title: 'Submit Scores', message: 'Submit your score to the blockchain after each game.', position: 'center' },
  { id: 'done', title: 'Ready to Play!', message: 'Hit Play to start. Good luck!', position: 'center' }
];
const KEY = 'runner-tutorial-done';
export function isTutorialComplete(): boolean { return localStorage.getItem(KEY) === 'true'; }
export function completeTutorial(): void { localStorage.setItem(KEY, 'true'); }
export function resetTutorial(): void { localStorage.removeItem(KEY); }