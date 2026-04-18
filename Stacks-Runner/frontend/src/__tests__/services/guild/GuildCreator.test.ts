import { describe, it, expect } from 'vitest';
import { GuildCreator } from '../../../services/guild/GuildCreator';
describe('GuildCreator', () => {
  it('initializes', () => { const s = new GuildCreator(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new GuildCreator(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new GuildCreator(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
