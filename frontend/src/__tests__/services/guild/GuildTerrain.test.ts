import { describe, it, expect } from 'vitest';
import { GuildTerrain } from '../../../services/guild/GuildTerrain';
describe('GuildTerrain', () => {
  it('initializes', () => { const s = new GuildTerrain(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new GuildTerrain(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new GuildTerrain(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
