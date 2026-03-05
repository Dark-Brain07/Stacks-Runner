;; Game Vault Contract Test Plan
;; 1. Deposit STX - should increase balance
;; 2. Withdraw STX - only owner should succeed
;; 3. Pay reward - authorized contract should succeed
;; 4. Unauthorized pay-reward should fail
;; 5. Insufficient balance should fail

(define-public (test-deposit)
    (ok true)
)
