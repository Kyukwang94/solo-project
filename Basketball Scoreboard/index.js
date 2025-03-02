
let homeCurrentScore = 0;
let guestCurrentScore = 0;


let scoreDisplay;


function scoreOne(button){
    if(button.parentElement.id === "home-score"){
        scoreDisplay = document.getElementById("home-score-display");
        homeCurrentScore += 1;
        scoreDisplay.innerText = homeCurrentScore;

    }
    else{
        scoreDisplay = document.getElementById("guest-score-display");
        guestCurrentScore += 1;
        scoreDisplay.innerText = guestCurrentScore;
    }
}
function scoreTwo(button){
    if(button.parentElement.id === "home-score"){
        scoreDisplay = document.getElementById("home-score-display");
        homeCurrentScore += 2;
        scoreDisplay.innerText = homeCurrentScore;
    }
    else{
        scoreDisplay = document.getElementById("guest-score-display");
        guestCurrentScore += 2;
        scoreDisplay.innerText = guestCurrentScore;
    }
}

function scoreThree(button){
    
    if(button.parentElement.id === "home-score"){
        scoreDisplay = document.getElementById("home-score-display");
        homeCurrentScore += 3;
        scoreDisplay.innerText = homeCurrentScore;
    }
    else{
        scoreDisplay = document.getElementById("guest-score-display");
        guestCurrentScore += 3;
        scoreDisplay.innerText = guestCurrentScore;
    }
}