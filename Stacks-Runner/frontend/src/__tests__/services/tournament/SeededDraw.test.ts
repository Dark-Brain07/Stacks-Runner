import { describe, it, expect } from 'vitest';
import { SeededDraw } from '../../../services/tournament/SeededDraw';
describe('SeededDraw', () => {
  it('initializes', () => { const s = new SeededDraw(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new SeededDraw(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new SeededDraw(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
