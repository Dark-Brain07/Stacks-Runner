import { describe, it, expect } from 'vitest';
import { NFTCollection } from '../../../services/nft/NFTCollection';
describe('NFTCollection', () => {
  it('initializes', () => { const s = new NFTCollection(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new NFTCollection(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new NFTCollection(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
