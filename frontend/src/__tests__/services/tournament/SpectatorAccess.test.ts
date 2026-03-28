import { describe, it, expect } from 'vitest';
import { SpectatorAccess } from '../../../services/tournament/SpectatorAccess';
describe('SpectatorAccess', () => {
  it('initializes', () => { const s = new SpectatorAccess(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new SpectatorAccess(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new SpectatorAccess(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
