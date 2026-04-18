;; Title: CacheBroker V2
;; Description: Enterprise security logic for Replay attack mitigation

(define-data-var cachebroker-lock bool false)

(define-read-only (is-locked)
  (var-get cachebroker-lock)
)

(define-public (toggle-lock (state bool))
  (begin
    (asserts! (is-eq tx-sender contract-caller) (err u401))
    (var-set cachebroker-lock state)
    (ok true)
  )
)
;; Phase 2 Hash: mnpe0gay8us2j