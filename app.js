let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let cards = [firstCard, secondCard]

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function renderGame() {
    for (let c = 0; c < cards.length; c++) {
        cardsEl.textContent = "Cards: " + cards[c] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You have got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You are out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function startGame() {
    renderGame()
}

function newCard() {
    message = "Drawing a new card from the deck!"
    messageEl.textContent = message

    let card = 7
    sum += card
    cards.push(card)
    setTimeout(renderGame, 2000)
}