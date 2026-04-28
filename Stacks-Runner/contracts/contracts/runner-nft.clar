;; runner-nft
;; Core NFT contract for Stacks Runner player avatars, skins, and collectible game characters

(impl-trait .nft-trait.nft-trait)

(define-non-fungible-token runner-nft uint)

(define-data-var last-token-id uint u0)

(define-constant CONTRACT_OWNER tx-sender)
(define-constant ERR_NOT_AUTHORIZED (err u401))
(define-constant ERR_NOT_FOUND (err u404))
(define-constant ERR_ALREADY_CLAIMED (err u409))

(define-map runner-attributes uint {
    runner-name: (string-ascii 64),
    speed-boost: uint,
    rarity: (string-ascii 16),
    level: uint,
    xp: uint,
    owner-since: uint
})

(define-map claimed-runners principal bool)

(define-read-only (get-last-token-id)
    (ok (var-get last-token-id))
)

(define-read-only (get-token-uri (token-id uint))
    (ok (some "https://stacks-runner.vercel.app/api/runner-nft/{id}"))
)

(define-read-only (get-owner (token-id uint))
    (ok (nft-get-owner? runner-nft token-id))
)

(define-read-only (get-runner-stats (token-id uint))
    (ok (map-get? runner-attributes token-id))
)

(define-public (transfer (token-id uint) (sender principal) (recipient principal))
    (begin
        (asserts! (is-eq tx-sender sender) ERR_NOT_AUTHORIZED)
        (nft-transfer? runner-nft token-id sender recipient)
    )
)

(define-public (mint-runner (recipient principal) (name (string-ascii 64)) (rarity (string-ascii 16)))
    (let
        (
            (new-id (+ (var-get last-token-id) u1))
            (speed (if (is-eq rarity "legendary") u50 
                    (if (is-eq rarity "epic") u35
                    (if (is-eq rarity "rare") u20 u10))))
        )
        (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_NOT_AUTHORIZED)
        (try! (nft-mint? runner-nft new-id recipient))
        (map-set runner-attributes new-id {
            runner-name: name,
            speed-boost: speed,
            rarity: rarity,
            level: u1,
            xp: u0,
            owner-since: block-height
        })
        (var-set last-token-id new-id)
        (ok new-id)
    )
)

(define-public (level-up (token-id uint) (xp-gained uint))
    (let
        (
            (stats (unwrap! (map-get? runner-attributes token-id) ERR_NOT_FOUND))
            (new-xp (+ (get xp stats) xp-gained))
            (new-level (+ (get level stats) (/ new-xp u100)))
        )
        (asserts! (is-eq (some tx-sender) (nft-get-owner? runner-nft token-id)) ERR_NOT_AUTHORIZED)
        (map-set runner-attributes token-id (merge stats {
            xp: (mod new-xp u100),
            level: new-level
        }))
        (ok new-level)
    )
)
