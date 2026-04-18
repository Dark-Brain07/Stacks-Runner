# Game Vault Contract

Address: SP1YH5MXTJT86BZXMFA2T51JF0QVZ8XNYV33QH6MF.game-vault

## Public Functions
- deposit (amount uint) - Deposit STX into reward pool
- withdraw (amount uint) (recipient principal) - Withdraw STX
- pay-reward (amount uint) (recipient principal) - Pay reward to player
- set-vault-owner (new-owner principal) - Transfer ownership
- set-reward-contract (contract principal) - Authorize reward contract

## Read-Only
- get-vault-owner - Returns current vault owner
- get-vault-balance - Returns tracked deposit balance
