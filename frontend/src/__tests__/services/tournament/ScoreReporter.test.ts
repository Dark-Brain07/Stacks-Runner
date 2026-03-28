import { describe, it, expect } from 'vitest';
import { ScoreReporter } from '../../../services/tournament/ScoreReporter';
describe('ScoreReporter', () => {
  it('initializes', () => { const s = new ScoreReporter(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new ScoreReporter(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new ScoreReporter(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
