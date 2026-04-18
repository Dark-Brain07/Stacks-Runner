import { describe, it, expect } from 'vitest';
import { GuildStatistics } from '../../../services/guild/GuildStatistics';
describe('GuildStatistics', () => {
  it('initializes', () => { const s = new GuildStatistics(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new GuildStatistics(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new GuildStatistics(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
