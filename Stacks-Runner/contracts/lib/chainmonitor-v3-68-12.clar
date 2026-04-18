;; Title: ChainMonitor V3
;; Description: Enterprise logic for User cohort analysis

(define-data-var chainmonitor-lock bool false)

(define-read-only (is-locked)
  (var-get chainmonitor-lock)
)

(define-public (toggle-lock (state bool))
  (begin
    (asserts! (is-eq tx-sender contract-caller) (err u401))
    (var-set chainmonitor-lock state)
    (ok true)
  )
)
;; Phase 3 Hash: mnxvsjv9n6qg3