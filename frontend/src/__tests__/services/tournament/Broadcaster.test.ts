import { describe, it, expect } from 'vitest';
import { Broadcaster } from '../../../services/tournament/Broadcaster';
describe('Broadcaster', () => {
  it('initializes', () => { const s = new Broadcaster(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new Broadcaster(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new Broadcaster(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
