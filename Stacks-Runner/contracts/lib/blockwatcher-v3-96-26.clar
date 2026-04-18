;; Title: BlockWatcher V3
;; Description: Enterprise logic for Payload sanitization

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
;; Phase 3 Hash: mnxw6vg7z679v