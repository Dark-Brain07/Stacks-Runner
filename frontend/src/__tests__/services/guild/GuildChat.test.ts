import { describe, it, expect } from 'vitest';
import { GuildChat } from '../../../services/guild/GuildChat';
describe('GuildChat', () => {
  it('initializes', () => { const s = new GuildChat(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new GuildChat(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new GuildChat(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
