import { handleGameOver, makeComputerMove } from "../Controller"
import { Board } from "../ts/model/Board"
import { Ship } from "../ts/model/Ship"
import { uncover } from "./Uncover"

const divBoard = document.querySelector('#player-board') as HTMLDivElement

let board: Board
let cells: Element[]

export function initializePlayerBoard() {
    divBoard.innerHTML = ''
    board = new Board()

    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            const cell = document.createElement('div')
            cell.classList.add('cell')
            cell.setAttribute('data-x', '' + x)
            cell.setAttribute('data-y', '' + y)
            cell.addEventListener('click', attack)
            divBoard?.appendChild(cell)
        }
    }

    cells = Array.from(divBoard.querySelectorAll('.cell'))

    board.place(new Ship(4), 4, 5, 'horizontal')
    board.place(new Ship(2), 2, 2, 'vertical')
}

export function playerWon() {
    return board.allAreSunk
}

export function togglePlayerBoard() {
    for (const cell of cells) {
        cell.classList.toggle('cell--inactive')
    }
}

function attack(event: Event) {
    const cell = event.target as Element

    if (cell.classList.contains('cell--inactive') || cell.classList.contains('cell--attacked')) {
        return
    }

    const x = cell.getAttribute('data-x') as string
    const y = cell.getAttribute('data-y') as string

    const response = board.attack(+x, +y)

    if (response.isShip) {
        cell.classList.add('ship')

        if (response.isSunk) {
            uncover(board, cells, cell)
        }
    } else {
        cell.classList.add('water')
    }

    cell.classList.add('cell--attacked')

    if (board.allAreSunk) {
        handleGameOver()
    } else {
        makeComputerMove()
    }
}