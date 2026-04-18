import { describe, it, expect } from 'vitest';
import { NFTFilter } from '../../../services/nft/NFTFilter';
describe('NFTFilter', () => {
  it('initializes', () => { const s = new NFTFilter(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new NFTFilter(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new NFTFilter(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
