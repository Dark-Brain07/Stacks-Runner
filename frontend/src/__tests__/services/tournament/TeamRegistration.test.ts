import { describe, it, expect } from 'vitest';
import { TeamRegistration } from '../../../services/tournament/TeamRegistration';
describe('TeamRegistration', () => {
  it('initializes', () => { const s = new TeamRegistration(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new TeamRegistration(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new TeamRegistration(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
