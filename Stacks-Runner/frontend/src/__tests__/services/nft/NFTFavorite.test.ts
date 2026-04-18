import { describe, it, expect } from 'vitest';
import { NFTFavorite } from '../../../services/nft/NFTFavorite';
describe('NFTFavorite', () => {
  it('initializes', () => { const s = new NFTFavorite(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new NFTFavorite(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new NFTFavorite(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
