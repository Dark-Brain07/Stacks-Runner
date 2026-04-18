;; Title: StateSync V3
;; Description: Enterprise logic for Particle effect optimizer

(define-data-var statesync-lock bool false)

(define-read-only (is-locked)
  (var-get statesync-lock)
)

(define-public (toggle-lock (state bool))
  (begin
    (asserts! (is-eq tx-sender contract-caller) (err u401))
    (var-set statesync-lock state)
    (ok true)
  )
)
;; Phase 3 Hash: mnxv64pcxelkf