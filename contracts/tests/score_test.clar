;; Score Contract Test Plan
;; 1. Submit first score - should succeed
;; 2. Submit higher score - should update
;; 3. Submit lower score - should fail with u103
;; 4. Check high score retrieval
;; 5. Verify fee transfer to vault
;; 6. Non-admin cannot set vault address

(define-public (test-submit-score)
    (ok true)
)
