import { describe, it, expect } from 'vitest';
import { CheckInService } from '../../../services/tournament/CheckInService';
describe('CheckInService', () => {
  it('initializes', () => { const s = new CheckInService(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new CheckInService(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new CheckInService(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
