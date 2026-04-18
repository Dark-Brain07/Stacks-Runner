import { describe, it, expect } from 'vitest';
import { TournamentCreator } from '../../../services/tournament/TournamentCreator';
describe('TournamentCreator', () => {
  it('initializes', () => { const s = new TournamentCreator(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new TournamentCreator(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new TournamentCreator(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
