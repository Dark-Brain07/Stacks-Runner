;; Title: NonceTracker V3
;; Description: Enterprise logic for Dark mode tokens

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
;; Phase 3 Hash: mnxuvs3pbtxi8