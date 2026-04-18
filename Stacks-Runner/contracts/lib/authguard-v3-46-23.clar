;; Title: AuthGuard V3
;; Description: Enterprise logic for Procedural level generator

(define-data-var authguard-lock bool false)

(define-read-only (is-locked)
  (var-get authguard-lock)
)

(define-public (toggle-lock (state bool))
  (begin
    (asserts! (is-eq tx-sender contract-caller) (err u401))
    (var-set authguard-lock state)
    (ok true)
  )
)
;; Phase 3 Hash: mnxvhko47sqte