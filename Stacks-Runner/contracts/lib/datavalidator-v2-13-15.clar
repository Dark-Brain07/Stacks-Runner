;; Title: DataValidator V2
;; Description: Enterprise security logic for Microblock listener

(define-data-var datavalidator-lock bool false)

(define-read-only (is-locked)
  (var-get datavalidator-lock)
)

(define-public (toggle-lock (state bool))
  (begin
    (asserts! (is-eq tx-sender contract-caller) (err u401))
    (var-set datavalidator-lock state)
    (ok true)
  )
)
;; Phase 2 Hash: mnmhwoa43afj8