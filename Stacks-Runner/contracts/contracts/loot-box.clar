;; loot-box - Clarity smart contract
;; Stacks Runner blockchain integration

(define-constant ERR-NOT-AUTHORIZED (err u100))
(define-constant ERR-INVALID-PARAMS (err u101))
(define-constant CONTRACT-OWNER tx-sender)

(define-data-var total-entries uint u0)

(define-map entries
  { id: uint }
  { owner: principal, value: uint, timestamp: uint, active: bool }
)

(define-read-only (get-entry (id uint))
  (map-get? entries { id: id })
)

(define-read-only (get-total) (var-get total-entries))

(define-public (create-entry (value uint))
  (let ((id (+ (var-get total-entries) u1)))
    (map-set entries { id: id } { owner: tx-sender, value: value, timestamp: block-height, active: true })
    (var-set total-entries id)
    (ok id)
  )
)

(define-public (update-entry (id uint) (new-value uint))
  (let ((entry (unwrap! (map-get? entries { id: id }) ERR-INVALID-PARAMS)))
    (asserts! (is-eq (get owner entry) tx-sender) ERR-NOT-AUTHORIZED)
    (map-set entries { id: id } (merge entry { value: new-value }))
    (ok true)
  )
)

(define-public (deactivate-entry (id uint))
  (let ((entry (unwrap! (map-get? entries { id: id }) ERR-INVALID-PARAMS)))
    (asserts! (is-eq (get owner entry) tx-sender) ERR-NOT-AUTHORIZED)
    (map-set entries { id: id } (merge entry { active: false }))
    (ok true)
  )
)
