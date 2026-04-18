# Smart Contract Reference
## character-score
Stores player scores on the Stacks blockchain.
### Functions
- submit-score (score uint) - Submit a new score
- get-score (player principal) - Read player score
### Events
- score-submitted: emitted when score is recorded
## open-mint-nft
Mintable NFT rewards for players.
### Functions
- mint (recipient principal) - Mint new NFT
- get-token-uri (id uint) - Get token metadata URI
### Constants
- MAX_SUPPLY: 10000
- MINT_PRICE: 200 microSTX
