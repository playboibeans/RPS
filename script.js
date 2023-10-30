let rps = ["rock", "paper", "scissors"]
let playerScore = 0
let comScore = 0


function getComputerChoice() {
    let comChoice = Math.floor(Math.random() * 3)
    return rps[comChoice]
}

function startGame(playerSelection) {

    let player = playerSelection
    let com = getComputerChoice()

    if (player == com) {

    } else if (player == 'rock' && com == 'paper') {
        comScore += 1
    } else if (player == 'rock' && com == 'scissors') {
        playerScore += 1
    } else if (player == 'paper' && com == 'scissors') {
        comScore += 1
    } else if (player == 'paper' && com == 'rock') {
        playerScore += 1
    } else if (player == 'scissors' && com == 'rock') {
        comScore += 1
    } else if (player == 'scissors' && com == 'paper') {
        playerScore += 1
    }

    document.querySelector('#picks').textContent = 'You: ' + player + ', Computer: ' + com
    document.querySelector('#scores').textContent = playerScore + ':' + comScore
}


let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')
let reset = document.querySelector('#reset')

rock.addEventListener('click', () => {
    startGame('rock')
})
paper.addEventListener('click', () => {
    startGame('paper')
})
scissors.addEventListener('click', () => {
    startGame('scissors')
})

reset.addEventListener('click', () => {
    playerScore = 0
    comScore = 0
    document.querySelector('#picks').textContent = 'You: -, Computer: -'
    document.querySelector('#scores').textContent = playerScore + ':' + comScore
})

// function game() {

//     if (playerScore > comScore) {
//         console.log('you ' + playerScore + ': computer ' + comScore + ', you beat the computer!')
//     } else if (comScore > playerScore) {
//         console.log('you ' + playerScore + ': computer ' + comScore + ', you just lost to the computer')
//     } else {
//         console.log('you ' + playerScore + ': computer ' + comScore + ', it was a tie!')
//     }
// }







