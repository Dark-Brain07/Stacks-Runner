;; Title: TxSigner V2
;; Description: Enterprise security logic for Payload sanitization

(define-data-var txsigner-lock bool false)

(define-read-only (is-locked)
  (var-get txsigner-lock)
)

(define-public (toggle-lock (state bool))
  (begin
    (asserts! (is-eq tx-sender contract-caller) (err u401))
    (var-set txsigner-lock state)
    (ok true)
  )
)
;; Phase 2 Hash: mnmhsj2pbz09g