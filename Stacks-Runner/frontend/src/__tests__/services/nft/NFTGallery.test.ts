import { describe, it, expect } from 'vitest';
import { NFTGallery } from '../../../services/nft/NFTGallery';
describe('NFTGallery', () => {
  it('initializes', () => { const s = new NFTGallery(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new NFTGallery(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new NFTGallery(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
