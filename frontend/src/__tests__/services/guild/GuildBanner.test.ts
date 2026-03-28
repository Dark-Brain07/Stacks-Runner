import { describe, it, expect } from 'vitest';
import { GuildBanner } from '../../../services/guild/GuildBanner';
describe('GuildBanner', () => {
  it('initializes', () => { const s = new GuildBanner(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new GuildBanner(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new GuildBanner(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
