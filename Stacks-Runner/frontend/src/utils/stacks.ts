/** Core interaction payload definition for Stacks Mainnet */
import { STACKS_MAINNET } from '@stacks/network';

export const network = STACKS_MAINNET;

/** App Details Configuration used for Leather/Xverse wallets */
export const appDetails = {
    name: 'Stacks Runner',
    icon: window.location.origin + '/logo.png',
};

export const CONTRACT_ADDRESS = 'SP1YH5MXTJT86BZXMFA2T51JF0QVZ8XNYV33QH6MF';

// Deployed contract identifiers
export const CONTRACTS = {
    score: `${CONTRACT_ADDRESS}.score`,
    nftTrait: `${CONTRACT_ADDRESS}.nft-trait`,
    characterNft: `${CONTRACT_ADDRESS}.character-nft`,
    openMintNft: `${CONTRACT_ADDRESS}.open-mint-nft`,
    governance: `${CONTRACT_ADDRESS}.governance`,
    vault: `${CONTRACT_ADDRESS}.game-vault`,
    reward: `${CONTRACT_ADDRESS}.game-reward`,
};
