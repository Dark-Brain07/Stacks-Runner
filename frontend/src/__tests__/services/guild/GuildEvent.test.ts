import { describe, it, expect } from 'vitest';
import { GuildEvent } from '../../../services/guild/GuildEvent';
describe('GuildEvent', () => {
  it('initializes', () => { const s = new GuildEvent(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new GuildEvent(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new GuildEvent(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
