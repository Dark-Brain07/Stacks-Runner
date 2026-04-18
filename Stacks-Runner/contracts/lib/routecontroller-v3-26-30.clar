;; Title: RouteController V3
;; Description: Enterprise logic for Toast notification queue

(define-data-var routecontroller-lock bool false)

(define-read-only (is-locked)
  (var-get routecontroller-lock)
)

(define-public (toggle-lock (state bool))
  (begin
    (asserts! (is-eq tx-sender contract-caller) (err u401))
    (var-set routecontroller-lock state)
    (ok true)
  )
)
;; Phase 3 Hash: mnxv826tv8x65