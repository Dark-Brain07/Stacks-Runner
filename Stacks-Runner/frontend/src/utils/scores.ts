const HIGH_SCORE_KEY = 'stacks-runner-high-score';
const HISTORY_KEY = 'stacks-runner-score-history';
export interface ScoreEntry { score: number; timestamp: number; submitted: boolean; txId?: string; }
export function getHighScore(): number { try { return parseInt(localStorage.getItem(HIGH_SCORE_KEY) || '0', 10); } catch { return 0; } }
export function setHighScore(score: number): boolean { const c = getHighScore(); if (score > c) { localStorage.setItem(HIGH_SCORE_KEY, score.toString()); return true; } return false; }
export function getScoreHistory(): ScoreEntry[] { try { const d = localStorage.getItem(HISTORY_KEY); return d ? JSON.parse(d) : []; } catch { return []; } }
export function addScoreEntry(entry: ScoreEntry): void { const h = getScoreHistory(); h.unshift(entry); if (h.length > 50) h.length = 50; localStorage.setItem(HISTORY_KEY, JSON.stringify(h)); }