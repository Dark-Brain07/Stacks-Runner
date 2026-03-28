import { describe, it, expect } from 'vitest';
import { OrganizerPanel } from '../../../services/tournament/OrganizerPanel';
describe('OrganizerPanel', () => {
  it('initializes', () => { const s = new OrganizerPanel(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new OrganizerPanel(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new OrganizerPanel(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
