import { describe, it, expect } from 'vitest';
import { NFTBurner } from '../../../services/nft/NFTBurner';
describe('NFTBurner', () => {
  it('initializes', () => { const s = new NFTBurner(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new NFTBurner(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new NFTBurner(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
