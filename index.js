
let homescore = 0
let guestscore = 0

let Home = document.querySelector("#home-score span") //queryselector selects the text in the nested p and span tag

let Guest = document.querySelector("#guest-score span") //remember to use ' #'

//Home
function plusone() {
    homescore += 1
    Home.textContent = homescore
}

function plustwo() {
    homescore += 2
    Home.textContent = homescore
}

function plusthree() {
    homescore += 3
    Home.textContent = homescore
}

//Guest
function plusoneGuest() {
    guestscore += 1
    Guest.textContent = guestscore
}

function plustwoGuest() {
    guestscore += 2
    Guest.textContent = guestscore
}

function plusthreeGuest() {
    guestscore += 3
    Guest.textContent = guestscore
}

