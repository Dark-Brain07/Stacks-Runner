import { describe, it, expect } from 'vitest';
import { GuildUpgrade } from '../../../services/guild/GuildUpgrade';
describe('GuildUpgrade', () => {
  it('initializes', () => { const s = new GuildUpgrade(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new GuildUpgrade(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new GuildUpgrade(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
