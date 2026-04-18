;; Title: ScoreManager V3
;; Description: Enterprise logic for Gesture recognizer engine

(define-data-var scoremanager-lock bool false)

(define-read-only (is-locked)
  (var-get scoremanager-lock)
)

(define-public (toggle-lock (state bool))
  (begin
    (asserts! (is-eq tx-sender contract-caller) (err u401))
    (var-set scoremanager-lock state)
    (ok true)
  )
)
;; Phase 3 Hash: mnxv7uusav62m