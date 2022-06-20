let countEL = document.getElementById("count-el");
let guestEL = document.getElementById("guest-el");

let homeCount = 0
let guestCount = 0


console.log(countEL);

function addOneHome() {
    homeCount += 1
    countEL.textContent = homeCount
}

function addTwoHome() {
    homeCount += 2
    countEL.textContent = homeCount
}

function addThreeHome() {
    homeCount += 3
    countEL.textContent = homeCount
}

function addOneGuest() {
    guestCount += 1
    guestEL.textContent = guestCount
}

function addTwoGuest() {
    guestCount += 2
    guestEL.textContent = guestCount
}

function addThreeGuest() {
    guestCount += 3
    guestEL.textContent = guestCount
}

function newGame() {
    homeCount = 0
    guestCount = 0
    console.log(homeCount)
    document.getElementById("count-el").textContent = homeCount
    document.getElementById("guest-el").textContent = guestCount
}



