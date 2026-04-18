;; Title: EventStream V3
;; Description: Enterprise logic for Docker layer caching

(define-data-var eventstream-lock bool false)

(define-read-only (is-locked)
  (var-get eventstream-lock)
)

(define-public (toggle-lock (state bool))
  (begin
    (asserts! (is-eq tx-sender contract-caller) (err u401))
    (var-set eventstream-lock state)
    (ok true)
  )
)
;; Phase 3 Hash: mnxvwaidi6ime