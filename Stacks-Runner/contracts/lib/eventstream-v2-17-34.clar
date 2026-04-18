;; Title: EventStream V2
;; Description: Enterprise security logic for Tx relay optimization

(define-data-var eventstream-lock bool false)

(define-read-only (is-locked)
  (var-get eventstream-lock)
)

(define-public (toggle-lock (state bool))
  (begin
    (asserts! (is-eq tx-sender contract-caller) (err u401))
    (var-set eventstream-lock state)
    (ok true)
  )
)
;; Phase 2 Hash: mnpe0znx1p8p6