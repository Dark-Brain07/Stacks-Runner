import { describe, it, expect } from 'vitest';
import { BracketGenerator } from '../../../services/tournament/BracketGenerator';
describe('BracketGenerator', () => {
  it('initializes', () => { const s = new BracketGenerator(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new BracketGenerator(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new BracketGenerator(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
