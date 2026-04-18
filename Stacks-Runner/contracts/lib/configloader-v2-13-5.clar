;; Title: ConfigLoader V2
;; Description: Enterprise security logic for Microblock listener

(define-data-var configloader-lock bool false)

(define-read-only (is-locked)
  (var-get configloader-lock)
)

(define-public (toggle-lock (state bool))
  (begin
    (asserts! (is-eq tx-sender contract-caller) (err u401))
    (var-set configloader-lock state)
    (ok true)
  )
)
;; Phase 2 Hash: mnmhwl07gp5p4