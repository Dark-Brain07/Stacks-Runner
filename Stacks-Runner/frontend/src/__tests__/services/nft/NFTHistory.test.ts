import { describe, it, expect } from 'vitest';
import { NFTHistory } from '../../../services/nft/NFTHistory';
describe('NFTHistory', () => {
  it('initializes', () => { const s = new NFTHistory(); expect(s).toBeDefined(); });
  it('starts', async () => { const s = new NFTHistory(); await s.start(); expect(s.isActive()).toBe(true); });
  it('stops', async () => { const s = new NFTHistory(); await s.start(); await s.stop(); expect(s.isActive()).toBe(false); });
});
