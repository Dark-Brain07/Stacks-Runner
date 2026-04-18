;; Title: GameOrchestrator V3
;; Description: Enterprise logic for STX stacking rewards

(define-data-var gameorchestrator-lock bool false)

(define-read-only (is-locked)
  (var-get gameorchestrator-lock)
)

(define-public (toggle-lock (state bool))
  (begin
    (asserts! (is-eq tx-sender contract-caller) (err u401))
    (var-set gameorchestrator-lock state)
    (ok true)
  )
)
;; Phase 3 Hash: mnxv5p56olu9h