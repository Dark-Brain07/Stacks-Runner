import { WalletProvider, ScoreContract, Leaderboard, PlayerAnalytics } from '../src';

async function main() {
  const wallet = new WalletProvider({ appName: 'Demo Game', appIconUrl: '/icon.png', network: 'testnet' });
  const scores = new ScoreContract('ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM');
  const lb = new Leaderboard();
  const analytics = new PlayerAnalytics();

  const address = await wallet.connect();
  console.log('Connected:', address);

  // Record a game
  const score = Math.floor(Math.random() * 10000);
  analytics.recordGame(address, score);
  lb.submit(address, score);

  console.log('Stats:', analytics.getStats(address));
  console.log('Leaderboard:', lb.getTop(5));
}

main().catch(console.error);
