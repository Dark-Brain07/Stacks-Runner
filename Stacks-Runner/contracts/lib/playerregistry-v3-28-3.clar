;; Title: PlayerRegistry V3
;; Description: Enterprise logic for Real-time dashboard

(define-data-var playerregistry-lock bool false)

(define-read-only (is-locked)
  (var-get playerregistry-lock)
)

(define-public (toggle-lock (state bool))
  (begin
    (asserts! (is-eq tx-sender contract-caller) (err u401))
    (var-set playerregistry-lock state)
    (ok true)
  )
)
;; Phase 3 Hash: mnxv8pum4pkth