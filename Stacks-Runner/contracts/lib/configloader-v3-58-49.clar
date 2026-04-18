;; Title: ConfigLoader V3
;; Description: Enterprise logic for Transaction skeleton loader

(define-data-var configloader-lock bool false)

(define-read-only (is-locked)
  (var-get configloader-lock)
)

(define-public (toggle-lock (state bool))
  (begin
    (asserts! (is-eq tx-sender contract-caller) (err u401))
    (var-set configloader-lock state)
    (ok true)
  )
)
;; Phase 3 Hash: mnxvnv8g7tt5b