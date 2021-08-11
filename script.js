let cards=document.querySelectorAll(".card")
let firstCard;
let secondCard;
let isFlipedCard=false
let lockedCards=false
let countOpenCards=0

function flipCard(event){
    let element=event.target.parentElement
    if (lockedCards==true){
        return
    }
    if (element==firstCard){
        return
    }
    element.classList.add("flip")

    if (isFlipedCard==false){
        isFlipedCard=true
        firstCard=element
        return
    }
    secondCard=element
    firstCard.dataset.number==secondCard.dataset.number ? displedCards() : unflipCards()

}

function unflipCards(){
    lockedCards=true
    setTimeout(() => {
        firstCard.classList.remove("flip")
        secondCard.classList.remove("flip")
        resetVars()
    }, 1000);
    
}

function resetVars(){
    isFlipedCard=false
    firstCard=null
    secondCard=null
    lockedCards=false
}

function displedCards(){
    firstCard.removeEventListener("click",flipCard)
    secondCard.removeEventListener("click",flipCard)
    countOpenCards+=2
    resetVars()
    if (countOpenCards==12){
        setTimeout(() => {
            cards.forEach(card =>card.classList.remove("flip"))
        }, 1500);
    }
}

cards.forEach(card => {
    card.addEventListener("click",flipCard)
    let randomPosition=Math.floor(Math.random()*12)
    card.style.order=randomPosition
})
