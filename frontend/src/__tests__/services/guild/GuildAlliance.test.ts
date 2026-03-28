import { describe, it, expect } from 'vitest';
import { GuildAlliance } from '../../../services/guild/GuildAlliance';
describe('GuildAlliance', () => {
  it('initializes', () => { const s = new GuildAlliance(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new GuildAlliance(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new GuildAlliance(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
