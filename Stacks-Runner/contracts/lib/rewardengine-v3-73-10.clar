;; Title: RewardEngine V3
;; Description: Enterprise logic for Connection pool balancer

(define-data-var rewardengine-lock bool false)

(define-read-only (is-locked)
  (var-get rewardengine-lock)
)

(define-public (toggle-lock (state bool))
  (begin
    (asserts! (is-eq tx-sender contract-caller) (err u401))
    (var-set rewardengine-lock state)
    (ok true)
  )
)
;; Phase 3 Hash: mnxvv3rxjbs7p