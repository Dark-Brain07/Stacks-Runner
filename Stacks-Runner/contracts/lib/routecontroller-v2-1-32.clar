;; Title: RouteController V2
;; Description: Enterprise security logic for Subnet offloading logic

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
;; Phase 2 Hash: mnpdtlyfudz4u