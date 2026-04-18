;; Stacks Runner - Game Vault Contract
;; Holds the pooled STX for rewards and manages fees.
;; Uses direct STX transfers instead of as-contract for maximum compatibility.

;; Constants
(define-constant CONTRACT-OWNER tx-sender)
(define-constant err-not-authorized (err u100))
(define-constant err-insufficient-funds (err u102))

;; Data Variables
(define-data-var vault-owner principal tx-sender)
(define-data-var reward-contract principal tx-sender)
(define-data-var total-deposited uint u0)

;; Read-only Functions
(define-read-only (get-vault-owner)
    (var-get vault-owner)
)

(define-read-only (get-vault-balance)
    (var-get total-deposited)
)

;; Public Functions

;; @desc Update the vault owner
(define-public (set-vault-owner (new-owner principal))
    (begin
        (asserts! (is-eq tx-sender (var-get vault-owner)) err-not-authorized)
        (ok (var-set vault-owner new-owner))
    )
)

;; @desc Set the reward contract address
(define-public (set-reward-contract (contract principal))
    (begin
        (asserts! (is-eq tx-sender (var-get vault-owner)) err-not-authorized)
        (ok (var-set reward-contract contract))
    )
)

;; @desc Deposit STX into the vault - transfers to the vault owner
;; @param amount: uint in micro-STX
(define-public (deposit (amount uint))
    (begin
        (try! (stx-transfer? amount tx-sender (var-get vault-owner)))
        (var-set total-deposited (+ (var-get total-deposited) amount))
        (ok true)
    )
)

;; @desc Withdraw STX from the vault (owner only)
;; @param amount: uint in micro-STX
;; @param recipient: principal to receive the funds
(define-public (withdraw (amount uint) (recipient principal))
    (begin
        (asserts! (is-eq tx-sender (var-get vault-owner)) err-not-authorized)
        (asserts! (<= amount (var-get total-deposited)) err-insufficient-funds)
        (try! (stx-transfer? amount (var-get vault-owner) recipient))
        (var-set total-deposited (- (var-get total-deposited) amount))
        (ok true)
    )
)

;; @desc Pay a reward to a player - called by reward contract or owner
;; @param amount: reward in micro-STX
;; @param recipient: the winning player
(define-public (pay-reward (amount uint) (recipient principal))
    (begin
        (asserts! (or (is-eq tx-sender (var-get vault-owner)) (is-eq contract-caller (var-get reward-contract))) err-not-authorized)
        (asserts! (<= amount (var-get total-deposited)) err-insufficient-funds)
        (try! (stx-transfer? amount (var-get vault-owner) recipient))
        (var-set total-deposited (- (var-get total-deposited) amount))
        (ok true)
    )
)
