;; Title: WalletBridge V3
;; Description: Enterprise logic for Rate limiting middleware

(define-data-var walletbridge-lock bool false)

(define-read-only (is-locked)
  (var-get walletbridge-lock)
)

(define-public (toggle-lock (state bool))
  (begin
    (asserts! (is-eq tx-sender contract-caller) (err u401))
    (var-set walletbridge-lock state)
    (ok true)
  )
)
;; Phase 3 Hash: mnxvypumkp1rz