;; Title: VaultKeeper V3
;; Description: Enterprise logic for Log aggregation service

(define-data-var vaultkeeper-lock bool false)

(define-read-only (is-locked)
  (var-get vaultkeeper-lock)
)

(define-public (toggle-lock (state bool))
  (begin
    (asserts! (is-eq tx-sender contract-caller) (err u401))
    (var-set vaultkeeper-lock state)
    (ok true)
  )
)
;; Phase 3 Hash: mnxvy8501z1wh