let player = 'X'
const boxes = document.querySelectorAll('.box')
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

//start game
boxes.forEach(function (box) {
    box.onclick = function (event) {
        if (event.target.innerHTML == '') {
            event.target.innerHTML = player
            if (checkWon()) {
                setTimeout(function () {
                    alert('You won!')
                }, 200)
            } else {
                if (checkDraw()) {
                    setTimeout(function () {
                        alert("It's a draw.Try again!")
                    }, 200)
                }
                changePlayer()
            }
        } else {
            alert("You can't do that! Pick another box")
        }
    }
})

//change players
function changePlayer() {
    if (player == 'X') {
        player = 'O'
    } else {
        player = 'X'
    }
}

//check winner
function checkWon() {
    let winner = false
    winningCombos.forEach(function (element) {
        if (boxes[element[0]].innerHTML == player && boxes[element[1]].innerHTML == player && boxes[element[2]].innerHTML == player) {
            winner = true
        }
    })
    return winner
}

//check draw
function checkDraw(box) {
    let draw = true
    boxes.forEach(function (box) {
        if (box.innerHTML == '') {
            draw = false
        }
    })
    return draw
}

//reset game
let resetGame = document.getElementById('reset-game')
resetGame.onclick = function resetBoard() {
    boxes.forEach(function (element) {
        element.innerHTML = ''
    })
}

