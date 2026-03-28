import { describe, it, expect } from 'vitest';
import { GuildRecruitment } from '../../../services/guild/GuildRecruitment';
describe('GuildRecruitment', () => {
  it('initializes', () => { const s = new GuildRecruitment(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new GuildRecruitment(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new GuildRecruitment(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
