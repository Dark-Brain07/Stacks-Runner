;; Stacks Runner - Score Contract
;; Records user high scores and interfaces with the Vault for fees

;; Constants
(define-constant err-not-authorized (err u100))
(define-constant err-score-too-low (err u103))
(define-constant err-fee-failed (err u104))

;; Data Maps
;; Maps a principal (player) to their highest score
(define-map high-scores principal uint)

;; Admin Variables
(define-data-var score-admin principal tx-sender)
(define-data-var vault-address principal tx-sender)

;; Read-only functions
(define-read-only (get-high-score (player principal))
    (default-to u0 (map-get? high-scores player))
)

;; Private function: Verify if new score is higher than recorded
(define-private (is-new-high-score (player principal) (new-score uint))
    (> new-score (get-high-score player))
)

;; Admin Functions
(define-public (set-vault-address (new-vault principal))
    (begin
        (asserts! (is-eq tx-sender (var-get score-admin)) err-not-authorized)
        (ok (var-set vault-address new-vault))
    )
)

;; Public Functions
;; @desc Submit a new score. Requires a transaction fee to be sent to the Vault.
;; Emits an event implicitly upon successful state change.
;; @param score: the points earned in the game
(define-public (submit-score (score uint))
    (let
        (
            (current-high-score (get-high-score tx-sender))
            ;; This should ideally pull the fee dynamically from `governance`, 
            ;; but for simplicity and decoupling, we assume 5000 uSTX fixed or pass via params.
            ;; Contract trait calls to governance can be added.
            (fee u5000) 
        )
        
        ;; Check if new score is higher
        (asserts! (> score current-high-score) err-score-too-low)
        
        ;; Transfer fee to vault
        ;; Using contract-call to the local vault. In production, use traits to pass the vault contract dynamically.
        ;; For now, we perform a simple stx-transfer to the registered vault address.
        (unwrap! (stx-transfer? fee tx-sender (var-get vault-address)) err-fee-failed)
        
        ;; Update score map
        (map-set high-scores tx-sender score)
        
        ;; Print event
        (print { event: "new-high-score", player: tx-sender, score: score })
        
        (ok true)
    )
)
