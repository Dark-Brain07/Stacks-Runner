import { describe, it, expect } from 'vitest';
import { StreamIntegration } from '../../../services/tournament/StreamIntegration';
describe('StreamIntegration', () => {
  it('initializes', () => { const s = new StreamIntegration(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new StreamIntegration(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new StreamIntegration(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
