import { describe, it, expect } from 'vitest';
import { NFTSearch } from '../../../services/nft/NFTSearch';
describe('NFTSearch', () => {
  it('initializes', () => { const s = new NFTSearch(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new NFTSearch(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new NFTSearch(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
