import { describe, it, expect } from 'vitest';
import { GuildBank } from '../../../services/guild/GuildBank';
describe('GuildBank', () => {
  it('initializes', () => { const s = new GuildBank(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new GuildBank(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new GuildBank(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
