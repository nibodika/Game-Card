let player = {
        name: "Nibodika" ,
        chip: 125

}

let cards = []//array -ordered list of items
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " : $" + player.chip

function getRandomCard()
{
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber>10)
    {
        return 10
    }else if(randomNumber === 1)
    {
        return 11
    }else{
        return randomNumber
    }
}

function startGame()
{
   isAlive = true
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard
    renderGame()
}

function renderGame()
{
    //render out firstcard and secondcard
    cardEl.textContent = "Cards: "
    //for loop that render out all the cards we have
    for(let i=0; i<cards.length;i++)
    {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
if(sum <= 20)
{
    message = "Do you want to draw a new card?"
}
else if(sum === 21)
{
    message = "You've got blackjack!"
    hasBlackjack = true
}
else
{
    message = "You're out of the game"
     isAlive = false
}
messageEl.textContent = message
}

function newCard()
{
    if(isAlive === true && hasBlackjack=== false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}

