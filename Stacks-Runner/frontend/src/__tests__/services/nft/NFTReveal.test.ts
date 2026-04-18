import { describe, it, expect } from 'vitest';
import { NFTReveal } from '../../../services/nft/NFTReveal';
describe('NFTReveal', () => {
  it('initializes', () => { const s = new NFTReveal(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new NFTReveal(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new NFTReveal(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
