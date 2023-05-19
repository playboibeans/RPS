let rps = ["rock", "paper", "scissors"]
let playerScore = 0
let comScore = 0


function getComputerChoice() {
    let comChoice = Math.floor(Math.random() * 3)
    return rps[comChoice]
}

function startGame(playerSelection, computerSelection) {

    let player = playerSelection.toLowerCase()
    let com = computerSelection

    if (player == com) {
        playerScore += 0
        comScore += 0
        return 'tie'
    } else if (player == 'rock' && com == 'paper') {
        comScore += 1
        return 'you lose, paper beats rock'
    } else if (player == 'rock' && com == 'scissors') {
        playerScore += 1
        return 'you win, rock beats scissors'
    } else if (player == 'paper' && com == 'scissors') {
        comScore += 1
        return 'you lose, scissors beats paper'
    } else if (player == 'paper' && com == 'rock') {
        playerScore += 1
        return 'you win, paper beats rock'
    } else if (player == 'scissors' && com == 'rock') {
        comScore += 1
        return 'you lose, rock beats scissors'
    } else if (player == 'scissors' && com == 'paper') {
        playerScore += 1
        return 'you win, scissors beats paper'
    }
}


function game() {
    for (let i = 0; i < 5; i++) {

        console.log(startGame(prompt("rock paper scissors?"), getComputerChoice()))
    }
    if (playerScore > comScore) {
        console.log('you ' + playerScore + ': computer ' + comScore + ', you beat the computer!')
    } else if (comScore > playerScore) {
        console.log('you ' + playerScore + ': computer ' + comScore + ', you just lost to the computer')
    } else {
        console.log('you ' + playerScore + ': computer ' + comScore + ', it was a tie!')
    }
}

game()