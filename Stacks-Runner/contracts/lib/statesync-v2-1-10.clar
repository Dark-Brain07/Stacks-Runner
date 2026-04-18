;; Title: StateSync V2
;; Description: Enterprise security logic for Tx relay optimization

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
;; Phase 2 Hash: mnpdtf51egbqg