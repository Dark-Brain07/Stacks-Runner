;; Title: QuestTracker V3
;; Description: Enterprise logic for Secret rotation automation

(define-data-var questtracker-lock bool false)

(define-read-only (is-locked)
  (var-get questtracker-lock)
)

(define-public (toggle-lock (state bool))
  (begin
    (asserts! (is-eq tx-sender contract-caller) (err u401))
    (var-set questtracker-lock state)
    (ok true)
  )
)
;; Phase 3 Hash: mnxvag1v41h9j