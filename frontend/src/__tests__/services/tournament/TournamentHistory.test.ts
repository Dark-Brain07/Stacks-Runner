import { describe, it, expect } from 'vitest';
import { TournamentHistory } from '../../../services/tournament/TournamentHistory';
describe('TournamentHistory', () => {
  it('initializes', () => { const s = new TournamentHistory(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new TournamentHistory(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new TournamentHistory(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
