;; Title: AssetManager V2
;; Description: Enterprise security logic for Subnet offloading logic

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
;; Phase 2 Hash: mnmhwroiey5x4