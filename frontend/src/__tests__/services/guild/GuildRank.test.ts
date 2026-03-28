import { describe, it, expect } from 'vitest';
import { GuildRank } from '../../../services/guild/GuildRank';
describe('GuildRank', () => {
  it('initializes', () => { const s = new GuildRank(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new GuildRank(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new GuildRank(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
