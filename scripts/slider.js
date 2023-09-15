console.log("hello, world")


let currentIndex = 0;
const initialCards = [
    {
        id: 1,
        alt: "природа",
        url: "images/mobile01.png"
    },
    {
        id: 2,
        alt: "природа",
        url: "images/mobile02.png"
    },
    {
        id: 3,
        alt: "природа",
        url: "images/mobile03.png"
    },
    {
        id: 4,
        alt: "природа",
        url: "images/mobile04.png"
    }

]

const cardsElement = document.querySelector(".subscription__images-mobile")

const cardElementFragmentTemplate = document.querySelector(".subscription-template").content;
const cardElementTemplate = cardElementFragmentTemplate.querySelector('.subscription__image-mobile');

const cardNodes = initialCards.map((item) => createCardNode(item))


function createCardNode(card) {

    const newCardNode = cardElementTemplate.cloneNode(true);
    newCardNode.id = card.id

    const newCardImageNode = newCardNode.querySelector(".subscription__img");
    // console.log(newCardImage)
    newCardImageNode.src = card.url;
    newCardImageNode.alt = "люди"

    return newCardNode
}


function showCardNode(cardNode) {

    // delete all element
    const oldCardNode = cardsElement.querySelector('.subscription__image-mobile')
    if (oldCardNode) {
        cardsElement.removeChild(oldCardNode)
    }

    cardsElement.appendChild(cardNode);
}



showCardNode(cardNodes[0]);

const rightButton = document.querySelector("#button-right");
const leftButton = document.querySelector("#button-left");


leftButton.addEventListener("click", () => {
    console.log("im left button")
    currentIndex = currentIndex - 1
    showCardNode(cardNodes[currentIndex])
    if (currentIndex === 0) {
        disableButtonLeft()
    }
    if (currentIndex === cardNodes.length - 2) {
        activateButtonRight()
    }

})
rightButton.addEventListener("click", () => {
    console.log("im right button")
    currentIndex = currentIndex + 1
    showCardNode(cardNodes[currentIndex])
    if (currentIndex === cardNodes.length - 1) {
        disableButtonRight()
    }

    if (currentIndex === 1) {
        activateButtonLeft()
    }
})

function disableButtonRight() {
    rightButton.setAttribute("disabled", true)

}
function disableButtonLeft() {
    leftButton.setAttribute("disabled", true)

}
function activateButtonRight() {
    rightButton.removeAttribute("disabled")

}
function activateButtonLeft() {
    leftButton.removeAttribute("disabled")

}
