;; shooter
;; Game mode contract for the Stacks Runner shooter mini-game with on-chain scoring and rewards

(define-constant CONTRACT_OWNER tx-sender)
(define-constant ERR_NOT_AUTHORIZED (err u401))
(define-constant ERR_INVALID_SCORE (err u400))
(define-constant ERR_GAME_NOT_FOUND (err u404))

(define-data-var game-counter uint u0)

(define-map shooter-games uint {
    player: principal,
    score: uint,
    enemies-defeated: uint,
    accuracy: uint,
    completed: bool,
    started-at: uint,
    ended-at: uint
})

(define-map player-shooter-stats principal {
    total-games: uint,
    highest-score: uint,
    total-enemies-defeated: uint,
    average-accuracy: uint
})

(define-map shooter-leaderboard uint {
    player: principal,
    score: uint
})

(define-read-only (get-game (game-id uint))
    (ok (map-get? shooter-games game-id))
)

(define-read-only (get-player-stats (player principal))
    (ok (map-get? player-shooter-stats player))
)

(define-read-only (get-leaderboard-entry (rank uint))
    (ok (map-get? shooter-leaderboard rank))
)

(define-read-only (get-total-games)
    (ok (var-get game-counter))
)

(define-public (start-game)
    (let
        (
            (new-id (+ (var-get game-counter) u1))
        )
        (map-set shooter-games new-id {
            player: tx-sender,
            score: u0,
            enemies-defeated: u0,
            accuracy: u0,
            completed: false,
            started-at: block-height,
            ended-at: u0
        })
        (var-set game-counter new-id)
        (ok new-id)
    )
)

(define-public (end-game (game-id uint) (final-score uint) (enemies uint) (accuracy uint))
    (let
        (
            (game (unwrap! (map-get? shooter-games game-id) ERR_GAME_NOT_FOUND))
            (current-stats (default-to 
                { total-games: u0, highest-score: u0, total-enemies-defeated: u0, average-accuracy: u0 }
                (map-get? player-shooter-stats tx-sender)))
        )
        (asserts! (is-eq (get player game) tx-sender) ERR_NOT_AUTHORIZED)
        (asserts! (not (get completed game)) ERR_INVALID_SCORE)
        (map-set shooter-games game-id (merge game {
            score: final-score,
            enemies-defeated: enemies,
            accuracy: accuracy,
            completed: true,
            ended-at: block-height
        }))
        (map-set player-shooter-stats tx-sender {
            total-games: (+ (get total-games current-stats) u1),
            highest-score: (if (> final-score (get highest-score current-stats)) final-score (get highest-score current-stats)),
            total-enemies-defeated: (+ (get total-enemies-defeated current-stats) enemies),
            average-accuracy: (/ (+ (get average-accuracy current-stats) accuracy) u2)
        })
        (ok final-score)
    )
)
