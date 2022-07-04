let Isalive= false
let gotblackjack= false
let countEl = document.getElementById("count")
let CardsEl = document.getElementById("Cards")
let sumEl = document.getElementById("car")
let NewcardEl = document.getElementById("nyet")
let count =0
let firstcard=(Math.floor(Math.random()*13)+1 ) 
let secondcard= (Math.floor(Math.random()*13)+1 )
let sum= firstcard+secondcard
let message=""

let cards = [firstcard, secondcard]
console.log(cards[1])

function StartGame(){
    CardsEl.textContent = "Cards: "+firstcard +" "+ secondcard
    sumEl.textContent = "Sum: "+sum

    if (sum == 21){
        message= "you've won blackjack"
        gotblackjack= true
        Isalive= false 
        }
        else if (sum <21){
            Isalive= true
            message= "do you want to draw a new card?"
        }
        else{
            message= "you lose"
            Isalive= false
        }
        countEl.textContent= message
}
function Newcard(){
    
    if (Isalive == true){
        let Card= (Math.floor(Math.random()*13)+1 )
        sum= Card+sum
        sumEl.textContent="sum: " + sum
        cards.push(Card)
        StartGame()
        console.log(cards)
        // let i= 0
        //     while (i<3){
        //         console.log(cards[i])
        //         i= i+1
        //     }
    }
}  
    console.log(Math.floor(Math.random()*13)+1 )
