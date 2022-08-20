let player = {
    name: "Maksim",
    money: 100000,
    bet: 0
}

let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let cards = []

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.money

function renderGame() {
    if (player.money >= player.bet) {
        cardsEl.textContent = "Cards: "
        for (let c = 0; c < cards.length; c++) {
            cardsEl.textContent += cards[c] + " "
        }
        
        sumEl.textContent = "Sum: " + sum
        if (sum <= 20) {
            message = "Do you want to draw a new card?"
        } else if (sum === 21) {
            message = "Wohoo! You have got Blackjack!"
            hasBlackJack = true
            player.money += player.bet * 5
        } else {
            message = "You are out of the game!"
            isAlive = false
            player.money -= player.bet 
        }
        if (hasBlackJack === true || isAlive === false) {
            playerEl.textContent = player.name + ": $" + player.money
        }
        messageEl.textContent = message
    }
}

function startGame() {
    if ((isAlive === false || hasBlackJack === true) && (player.bet > 0) && (player.money > 0)) {
        isAlive = true
        hasBlackJack = false
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        sum = firstCard + secondCard
        cards = [firstCard, secondCard]
        renderGame()
    }
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function getRandomCard() {
    let cardValue = Math.floor(Math.random()*13) + 1
    if (cardValue === 1) {
        return 11
    } else if (11 <= cardValue && cardValue <= 13) {
         return 10
    } else return cardValue
}

function confirm() {
    if (player.money >= Number(document.getElementById("bet-el").value) && isAlive === false || hasBlackJack === true) {
        player.bet = Number(document.getElementById("bet-el").value)
    }
}

function textNone() {
    document.getElementById("fixed").textContent = ""
}
function refreshGame() {
    isAlive = false
    document.getElementById("fixed").textContent = "fixed"
    setTimeout(textNone, 1000)
}
