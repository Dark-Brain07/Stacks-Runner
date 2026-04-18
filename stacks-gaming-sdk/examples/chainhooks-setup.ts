import { ChainHookConfig, WebhookHandler } from '../src';

const handler = new WebhookHandler();

handler.register('score_submit', (event) => {
  console.log(`New score: ${event.data.score} by ${event.data.player}`);
});

handler.register('nft_mint', (event) => {
  console.log(`NFT minted: ${event.data.tokenId}`);
});

const ftConfig = ChainHookConfig.ftTransfer(
  'https://api.mygame.com/hooks/ft',
  process.env.API_KEY || 'dev-key',
  'SP000000000000000000002Q6VF78.bns::names'
);

console.log('Chainhook config:', JSON.stringify(ftConfig, null, 2));
