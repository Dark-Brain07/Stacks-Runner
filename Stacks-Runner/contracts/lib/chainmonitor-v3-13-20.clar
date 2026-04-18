;; Title: ChainMonitor V3
;; Description: Enterprise logic for Clarity contract auditor

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
;; Phase 3 Hash: mnxv1eb9aoudw