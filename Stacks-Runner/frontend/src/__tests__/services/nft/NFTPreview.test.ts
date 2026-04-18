import { describe, it, expect } from 'vitest';
import { NFTPreview } from '../../../services/nft/NFTPreview';
describe('NFTPreview', () => {
  it('initializes', () => { const s = new NFTPreview(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new NFTPreview(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new NFTPreview(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
