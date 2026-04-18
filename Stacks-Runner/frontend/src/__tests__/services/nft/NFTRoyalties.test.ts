import { describe, it, expect } from 'vitest';
import { NFTRoyalties } from '../../../services/nft/NFTRoyalties';
describe('NFTRoyalties', () => {
  it('initializes', () => { const s = new NFTRoyalties(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new NFTRoyalties(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new NFTRoyalties(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
