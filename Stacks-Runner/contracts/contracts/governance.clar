;; Stacks Runner - Governance Contract
;; Manages game parameters and admin controls

;; Constants
(define-constant err-not-authorized (err u100))
(define-constant err-invalid-parameter (err u101))

;; Data Variables
(define-data-var game-owner principal tx-sender)
(define-data-var difficulty-multiplier uint u1)
(define-data-var score-fee uint u5000) ;; 0.005 STX in micro-STX
(define-data-var is-paused bool false)

;; Read-only Functions
(define-read-only (get-game-owner)
    (var-get game-owner)
)

(define-read-only (get-difficulty-multiplier)
    (var-get difficulty-multiplier)
)

(define-read-only (get-score-fee)
    (var-get score-fee)
)

(define-read-only (get-is-paused)
    (var-get is-paused)
)

;; Authorization check
(define-private (is-owner)
    (is-eq tx-sender (var-get game-owner))
)

;; Admin Functions

;; @desc Update the game owner
;; @param new-owner: the new principal to act as admin
(define-public (set-game-owner (new-owner principal))
    (begin
        (asserts! (is-owner) err-not-authorized)
        (ok (var-set game-owner new-owner))
    )
)

;; @desc Update the difficulty multiplier
;; @param new-multiplier: uint representing the new difficulty factor
(define-public (set-difficulty-multiplier (new-multiplier uint))
    (begin
        (asserts! (is-owner) err-not-authorized)
        (asserts! (> new-multiplier u0) err-invalid-parameter)
        (ok (var-set difficulty-multiplier new-multiplier))
    )
)

;; @desc Update the fixed fee to submit a score
;; @param new-fee: uint representing micro-STX (default 5000 = 0.005 STX)
(define-public (set-score-fee (new-fee uint))
    (begin
        (asserts! (is-owner) err-not-authorized)
        (ok (var-set score-fee new-fee))
    )
)

;; @desc Pause the game (prevents interactions on dependent contracts if they check this)
(define-public (pause-game)
    (begin
        (asserts! (is-owner) err-not-authorized)
        (ok (var-set is-paused true))
    )
)

;; @desc Resume the game
(define-public (resume-game)
    (begin
        (asserts! (is-owner) err-not-authorized)
        (ok (var-set is-paused false))
    )
)
