;; payment-nft
;; NFT contract for handling in-game payment collectibles and transaction receipts on Stacks Runner

(impl-trait .nft-trait.nft-trait)

(define-non-fungible-token payment-nft uint)

(define-data-var last-token-id uint u0)

(define-constant CONTRACT_OWNER tx-sender)
(define-constant ERR_NOT_AUTHORIZED (err u401))
(define-constant ERR_NOT_FOUND (err u404))

(define-map token-metadata uint {
    payment-amount: uint,
    payment-type: (string-ascii 32),
    timestamp: uint,
    payer: principal
})

(define-read-only (get-last-token-id)
    (ok (var-get last-token-id))
)

(define-read-only (get-token-uri (token-id uint))
    (ok (some "https://stacks-runner.vercel.app/api/payment-nft/{id}"))
)

(define-read-only (get-owner (token-id uint))
    (ok (nft-get-owner? payment-nft token-id))
)

(define-read-only (get-payment-info (token-id uint))
    (ok (map-get? token-metadata token-id))
)

(define-public (transfer (token-id uint) (sender principal) (recipient principal))
    (begin
        (asserts! (is-eq tx-sender sender) ERR_NOT_AUTHORIZED)
        (nft-transfer? payment-nft token-id sender recipient)
    )
)

(define-public (mint-payment-nft (recipient principal) (amount uint) (payment-type (string-ascii 32)))
    (let
        (
            (new-id (+ (var-get last-token-id) u1))
        )
        (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_NOT_AUTHORIZED)
        (try! (nft-mint? payment-nft new-id recipient))
        (map-set token-metadata new-id {
            payment-amount: amount,
            payment-type: payment-type,
            timestamp: block-height,
            payer: recipient
        })
        (var-set last-token-id new-id)
        (ok new-id)
    )
)
