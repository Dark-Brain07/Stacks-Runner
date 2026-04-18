import { describe, it, expect } from 'vitest';
import { InvitationManager } from '../../../services/tournament/InvitationManager';
describe('InvitationManager', () => {
  it('initializes', () => { const s = new InvitationManager(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new InvitationManager(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new InvitationManager(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
