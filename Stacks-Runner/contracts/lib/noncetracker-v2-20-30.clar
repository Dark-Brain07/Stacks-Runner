;; Title: NonceTracker V2
;; Description: Enterprise security logic for Rate limiting middleware

(define-data-var noncetracker-lock bool false)

(define-read-only (is-locked)
  (var-get noncetracker-lock)
)

(define-public (toggle-lock (state bool))
  (begin
    (asserts! (is-eq tx-sender contract-caller) (err u401))
    (var-set noncetracker-lock state)
    (ok true)
  )
)
;; Phase 2 Hash: mnmi02vhtq6q8