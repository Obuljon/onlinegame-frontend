let board: string[] = [
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
]

// G'olibni tekshiruvchi funksiya
function checkWinner(
    board: string[],
    player: string,
): boolean {
    const winningCombinations: number[][] = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // Gorizontal
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], // Vertikal
        [0, 4, 8],
        [2, 4, 6], // Diagonal
    ]
    return winningCombinations.some((combination) =>
        combination.every(
            (index) => board[index] === player,
        ),
    )
}

// O'yin durangligini tekshiruvchi funksiya
function isDraw(board: string[]): boolean {
    return board.every((cell) => cell !== "*")
}

// Minimax algoritmi - kompyuter uchun eng yaxshi harakatni topish uchun ishlatiladi
function minimax(
    board: string[],
    isMaximizing: boolean,
): { score: number; move?: number } {
    if (checkWinner(board, "0")) return { score: 1 } // Kompyuter yutishi
    if (checkWinner(board, "x")) return { score: -1 } // O'yinchi yutishi
    if (isDraw(board)) return { score: 0 } // Durang

    const emptySpaces = getEmptySpaces(board)
    let bestMove: number | undefined

    if (isMaximizing) {
        let bestScore = -Infinity
        for (let index of emptySpaces) {
            board[index] = "0"
            const result = minimax(board, false)
            board[index] = "*"
            if (result.score > bestScore) {
                bestScore = result.score
                bestMove = index
            }
        }
        return { score: bestScore, move: bestMove }
    } else {
        let bestScore = Infinity
        for (let index of emptySpaces) {
            board[index] = "x"
            const result = minimax(board, true)
            board[index] = "*"
            if (result.score < bestScore) {
                bestScore = result.score
                bestMove = index
            }
        }
        return { score: bestScore, move: bestMove }
    }
}

// Bo'sh joylarni qaytaruvchi funksiya
function getEmptySpaces(board: string[]): number[] {
    return board.reduce(
        (acc: number[], val: string, index: number) => {
            if (val === "*") acc.push(index)
            return acc
        },
        [],
    )
}

// Kompyuterning eng yaxshi yurishini topuvchi funksiya
function findBestMove(board: string[]): number | undefined {
    const bestMove = minimax(board, true)
    return bestMove.move
}

// O'yinchi yurishi
function playerMove(
    board: string[],
    move: number,
    player: string,
): boolean {
    if (board[move] === "*") {
        board[move] = player
        return true
    }
    return false
}

// Har bir yurishdan keyin yangi taxtani kiriting
export default function makeMove(
    currentBoard: string,
    player: string = "x",
) {
    board = currentBoard.split("")

    if (checkWinner(board, "x")) {
        return {
            winner: true,
            result: "x",
            board: board.join(""),
        }
    } else if (checkWinner(board, "0")) {
        return {
            winner: true,
            result: "0",
            board: board.join(""),
        }
    }

    // Kompyuter (0) o'z yurishini qiladi
    const bestMove = findBestMove(board)
    if (bestMove !== undefined) {
        board[bestMove] = "0"
    }

    if (checkWinner(board, "0")) {
        return {
            winner: true,
            result: "0",
            board: board.join(""),
        }
    } else if (getEmptySpaces(board).length === 0) {
        return {
            winner: true,
            result: "*",
            board: board.join(""),
        }
    }

    return {
        winner: false,
        board: board.join(""),
        result: "*",
    }
}
