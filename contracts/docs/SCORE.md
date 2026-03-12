# Score Contract

Address: SP1YH5MXTJT86BZXMFA2T51JF0QVZ8XNYV33QH6MF.score

## Public Functions
- submit-score (score uint) - Submit a new high score
- set-vault-address (new-vault principal) - Set fee recipient

## Read-Only
- get-high-score (player principal) - Get player highest score

## Error Codes
- u100: Not authorized
- u103: Score too low
- u104: Fee transfer failed


## Standard Errors
Error codes uniformly apply across `game-vault` and `game-reward` to ensure atomic state stability.
