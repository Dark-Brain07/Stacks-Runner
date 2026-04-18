import { describe, it, expect } from 'vitest';
import { GuildDonation } from '../../../services/guild/GuildDonation';
describe('GuildDonation', () => {
  it('initializes', () => { const s = new GuildDonation(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new GuildDonation(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new GuildDonation(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
