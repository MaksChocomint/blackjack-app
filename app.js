let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let cards = []

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Maksim",
    money: 145,
    sayHello: function() {
        console.log("hello!")
    }
}
player.sayHello()
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.money

function renderGame() {
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
    } else {
        message = "You are out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        message = "Drawing a new card from the deck!"
        messageEl.textContent = message
        let card = getRandomCard()
        sum += card
        cards.push(card)
        setTimeout(renderGame, 1000)
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
