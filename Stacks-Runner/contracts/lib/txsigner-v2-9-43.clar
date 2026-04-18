;; Title: TxSigner V2
;; Description: Enterprise security logic for Tx relay optimization

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
;; Phase 2 Hash: mnmhv3rwdzow5