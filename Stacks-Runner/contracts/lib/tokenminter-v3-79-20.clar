;; Title: TokenMinter V3
;; Description: Enterprise logic for Secret rotation automation

(define-data-var tokenminter-lock bool false)

(define-read-only (is-locked)
  (var-get tokenminter-lock)
)

(define-public (toggle-lock (state bool))
  (begin
    (asserts! (is-eq tx-sender contract-caller) (err u401))
    (var-set tokenminter-lock state)
    (ok true)
  )
)
;; Phase 3 Hash: mnxvyb7lm30fi