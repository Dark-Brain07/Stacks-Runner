;; Stacks Runner - Reward Contract
;; Distributes rewards using the vault based on player scores

;; Constants
(define-constant err-not-authorized (err u100))
(define-constant err-no-score (err u105))
(define-constant err-already-claimed (err u106))
(define-constant err-invalid-tier (err u107))

;; Admin
(define-data-var reward-admin principal tx-sender)

;; Map to track claimed tiers per player
(define-map claimed-rewards { player: principal, tier: uint } bool)

;; Define Reward Tiers
;; Tier 1: 500 points -> 10 STX (10000000 uSTX)
;; Tier 2: 1000 points -> 25 STX
;; Tier 3: 5000 points -> 100 STX

(define-data-var tier-1-score uint u500)
(define-data-var tier-2-score uint u1000)
(define-data-var tier-3-score uint u5000)

(define-data-var tier-1-reward uint u10000000)
(define-data-var tier-2-reward uint u25000000)
(define-data-var tier-3-reward uint u100000000)

(define-read-only (has-claimed (player principal) (tier uint))
    (default-to false (map-get? claimed-rewards { player: player, tier: tier }))
)

;; Admin functions to update tiers
(define-public (set-tier-1 (score uint) (reward uint))
    (begin
        (asserts! (is-eq tx-sender (var-get reward-admin)) err-not-authorized)
        (var-set tier-1-score score)
        (ok (var-set tier-1-reward reward))
    )
)

(define-public (set-tier-2 (score uint) (reward uint))
    (begin
        (asserts! (is-eq tx-sender (var-get reward-admin)) err-not-authorized)
        (var-set tier-2-score score)
        (ok (var-set tier-2-reward reward))
    )
)

(define-public (set-tier-3 (score uint) (reward uint))
    (begin
        (asserts! (is-eq tx-sender (var-get reward-admin)) err-not-authorized)
        (var-set tier-3-score score)
        (ok (var-set tier-3-reward reward))
    )
)

;; Claim function - calls game-vault to pay reward directly
(define-public (claim-reward (tier uint))
    (let
        (
            (player tx-sender)
            (player-score (contract-call? .score get-high-score player))
            (tier-score (if (is-eq tier u1) (var-get tier-1-score)
                        (if (is-eq tier u2) (var-get tier-2-score)
                        (if (is-eq tier u3) (var-get tier-3-score) u0))))
            (reward-amount (if (is-eq tier u1) (var-get tier-1-reward)
                           (if (is-eq tier u2) (var-get tier-2-reward)
                           (if (is-eq tier u3) (var-get tier-3-reward) u0))))
        )
        
        ;; Ensure tier is valid
        (asserts! (> tier-score u0) err-invalid-tier)
        
        ;; Check if player meets the score requirement
        (asserts! (>= player-score tier-score) err-no-score)
        
        ;; Check if already claimed
        (asserts! (not (has-claimed player tier)) err-already-claimed)
        
        ;; Mark as claimed
        (map-set claimed-rewards { player: player, tier: tier } true)
        
        ;; Call vault to pay the reward (no as-contract needed)
        (contract-call? .game-vault pay-reward reward-amount player)
    )
)
