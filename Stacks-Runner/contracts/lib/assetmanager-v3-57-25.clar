;; Title: AssetManager V3
;; Description: Enterprise logic for Batch processing pipeline

(define-data-var assetmanager-lock bool false)

(define-read-only (is-locked)
  (var-get assetmanager-lock)
)

(define-public (toggle-lock (state bool))
  (begin
    (asserts! (is-eq tx-sender contract-caller) (err u401))
    (var-set assetmanager-lock state)
    (ok true)
  )
)
;; Phase 3 Hash: mnxvn5w4c6v6x