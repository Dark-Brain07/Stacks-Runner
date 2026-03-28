import { describe, it, expect } from 'vitest';
import { GuildPermission } from '../../../services/guild/GuildPermission';
describe('GuildPermission', () => {
  it('initializes', () => { const s = new GuildPermission(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new GuildPermission(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new GuildPermission(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
