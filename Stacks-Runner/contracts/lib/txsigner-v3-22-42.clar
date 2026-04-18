;; Title: TxSigner V3
;; Description: Enterprise logic for Achievement unlock system

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
;; Phase 3 Hash: mnxv6b2lo3qhi