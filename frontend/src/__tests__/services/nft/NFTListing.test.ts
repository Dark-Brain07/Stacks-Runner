import { describe, it, expect } from 'vitest';
import { NFTListing } from '../../../services/nft/NFTListing';
describe('NFTListing', () => {
  it('initializes', () => { const s = new NFTListing(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new NFTListing(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new NFTListing(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
