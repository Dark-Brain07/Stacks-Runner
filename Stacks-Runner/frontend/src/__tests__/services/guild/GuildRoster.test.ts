import { describe, it, expect } from 'vitest';
import { GuildRoster } from '../../../services/guild/GuildRoster';
describe('GuildRoster', () => {
  it('initializes', () => { const s = new GuildRoster(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new GuildRoster(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new GuildRoster(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
