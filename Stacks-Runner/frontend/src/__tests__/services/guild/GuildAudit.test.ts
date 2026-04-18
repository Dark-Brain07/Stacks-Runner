import { describe, it, expect } from 'vitest';
import { GuildAudit } from '../../../services/guild/GuildAudit';
describe('GuildAudit', () => {
  it('initializes', () => { const s = new GuildAudit(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new GuildAudit(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new GuildAudit(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
