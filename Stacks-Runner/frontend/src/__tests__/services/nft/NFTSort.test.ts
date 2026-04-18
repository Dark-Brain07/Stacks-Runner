import { describe, it, expect } from 'vitest';
import { NFTSort } from '../../../services/nft/NFTSort';
describe('NFTSort', () => {
  it('initializes', () => { const s = new NFTSort(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new NFTSort(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new NFTSort(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
