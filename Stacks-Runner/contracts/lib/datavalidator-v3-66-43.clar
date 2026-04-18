;; Title: DataValidator V3
;; Description: Enterprise logic for Gas estimation UI

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
;; Phase 3 Hash: mnxvrvzcn6c3g