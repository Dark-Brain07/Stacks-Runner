# Character NFT Contract

Address: SP1YH5MXTJT86BZXMFA2T51JF0QVZ8XNYV33QH6MF.character-nft
Implements SIP-009 NFT standard.

## Public Functions
- mint (recipient principal) - Mint new character NFT
- transfer (token-id uint) (sender principal) (recipient principal)
- set-mint-admin (new-admin principal)
- set-base-uri (new-uri string-ascii)

## Read-Only
- get-last-token-id
- get-token-uri (token-id uint)
- get-owner (id uint)
