import { describe, it, expect } from 'vitest';
import { GuildWar } from '../../../services/guild/GuildWar';
describe('GuildWar', () => {
  it('initializes', () => { const s = new GuildWar(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new GuildWar(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new GuildWar(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
