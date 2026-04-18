import { describe, it, expect } from 'vitest';
import { GroupStageManager } from '../../../services/tournament/GroupStageManager';
describe('GroupStageManager', () => {
  it('initializes', () => { const s = new GroupStageManager(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new GroupStageManager(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new GroupStageManager(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
