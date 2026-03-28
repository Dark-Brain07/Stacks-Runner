import { describe, it, expect } from 'vitest';
import { ReplayArchive } from '../../../services/tournament/ReplayArchive';
describe('ReplayArchive', () => {
  it('initializes', () => { const s = new ReplayArchive(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new ReplayArchive(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new ReplayArchive(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
