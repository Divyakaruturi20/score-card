let homeScoreEl = document.getElementById("homescore-el")
let homeScore = 0
let guestScoreEl = document.getElementById("guestscore-el")
let guestScore = 0
function homeincrement1(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function homeincrement2(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function homeincrement3(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function guestincrement1(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function guestincrement2(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function guestincrement3(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}