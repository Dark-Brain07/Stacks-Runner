;; Title: ScoreManager V3
;; Description: Enterprise logic for Haptic feedback module

(define-data-var scoremanager-lock bool false)

(define-read-only (is-locked)
  (var-get scoremanager-lock)
)

(define-public (toggle-lock (state bool))
  (begin
    (asserts! (is-eq tx-sender contract-caller) (err u401))
    (var-set scoremanager-lock state)
    (ok true)
  )
)
;; Phase 3 Hash: mnxvjve16l7j5