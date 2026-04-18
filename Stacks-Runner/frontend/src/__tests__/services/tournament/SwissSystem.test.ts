import { describe, it, expect } from 'vitest';
import { SwissSystem } from '../../../services/tournament/SwissSystem';
describe('SwissSystem', () => {
  it('initializes', () => { const s = new SwissSystem(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new SwissSystem(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new SwissSystem(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
