;; Stacks Runner - Character NFT (SIP-009)
;; Represents character skins or achievement NFTs for the game

(impl-trait .nft-trait.nft-trait)

(define-non-fungible-token stacks-runner-char uint)

;; Constants
(define-constant err-not-authorized (err u100))
(define-constant err-not-found (err u101))

;; Data Variables
(define-data-var last-token-id uint u0)
(define-data-var nft-mint-admin principal tx-sender)
(define-data-var base-uri (string-ascii 256) "https://stacks-runner.com/api/nft/")

;; Read-only functions
(define-read-only (get-last-token-id)
    (ok (var-get last-token-id))
)

(define-read-only (get-token-uri (token-id uint))
    (ok (some (var-get base-uri)))
)

(define-read-only (get-owner (id uint))
    (ok (nft-get-owner? stacks-runner-char id))
)

;; Private checks
(define-private (is-owner)
    (is-eq tx-sender (var-get nft-mint-admin))
)

;; Admin functions
(define-public (set-mint-admin (new-admin principal))
    (begin
        (asserts! (is-owner) err-not-authorized)
        (ok (var-set nft-mint-admin new-admin))
    )
)

(define-public (set-base-uri (new-uri (string-ascii 256)))
    (begin
        (asserts! (is-owner) err-not-authorized)
        (ok (var-set base-uri new-uri))
    )
)

;; SIP-009 Transfer function
(define-public (transfer (token-id uint) (sender principal) (recipient principal))
    (begin
        (asserts! (is-eq tx-sender sender) err-not-authorized)
        (nft-transfer? stacks-runner-char token-id sender recipient)
    )
)

;; Mint function
;; @desc Mint a new character NFT to a recipient. Only the mint admin can call this.
;; @param recipient: the player to receive the NFT
(define-public (mint (recipient principal))
    (let
        (
            (token-id (+ (var-get last-token-id) u1))
        )
        (asserts! (is-owner) err-not-authorized)
        (try! (nft-mint? stacks-runner-char token-id recipient))
        (var-set last-token-id token-id)
        (ok token-id)
    )
)
