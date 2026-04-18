;; Title: BlockWatcher V3
;; Description: Enterprise logic for Health check endpoints

(define-data-var blockwatcher-lock bool false)

(define-read-only (is-locked)
  (var-get blockwatcher-lock)
)

(define-public (toggle-lock (state bool))
  (begin
    (asserts! (is-eq tx-sender contract-caller) (err u401))
    (var-set blockwatcher-lock state)
    (ok true)
  )
)
;; Phase 3 Hash: mnxvhyfojf2w8