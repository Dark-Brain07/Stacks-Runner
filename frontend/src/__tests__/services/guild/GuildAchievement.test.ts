import { describe, it, expect } from 'vitest';
import { GuildAchievement } from '../../../services/guild/GuildAchievement';
describe('GuildAchievement', () => {
  it('initializes', () => { const s = new GuildAchievement(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new GuildAchievement(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new GuildAchievement(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
