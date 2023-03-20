let rock = document.getElementById("rock-btn");
let paper = document.getElementById("paper-btn");
let scissors = document.getElementById("scissors-btn");

let options = [rock, paper, scissors]

let result = document.getElementById("result");
let playagain = document.getElementById("play-again");

let playerchoice = document.getElementById("player-choice");
let computerchoice = document.getElementById("computer-choice");

function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    playerchoice.src = "assets/img/" + playerSelection + ".png";
    computerchoice.src = "assets/img/" + computerSelection + ".png";

    if (playerSelection == computerSelection) {
        result.innerHTML = "It's a tie!";
        result.classList.add("tie");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        result.innerHTML = "You win! Rock beats scissors.";
        result.classList.add("win");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        result.innerHTML = "You lose! Paper beats rock.";
        result.classList.add("lose");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        result.innerHTML = "You win! Paper beats rock.";
        result.classList.add("win");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        result.innerHTML = "You lose! Scissors beats paper.";
        result.classList.add("lose");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        result.innerHTML = "You win! Scissors beats paper.";
        result.classList.add("win");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        result.innerHTML = "You lose! Rock beats scissors.";
        result.classList.add("lose");
    }

    options.forEach(option => {
        option.disabled = true;
        option.classList.add("disabled");
    });

    playagain.classList.remove("hidden");
}

rock.addEventListener("click", function() {
    playRound("rock", computerPlay());
});

paper.addEventListener("click", function() {
    playRound("paper", computerPlay());
});

scissors.addEventListener("click", function() {
    playRound("scissors", computerPlay());
});

playagain.addEventListener("click", function() {
    playerchoice.src = "assets/img/questionmark.png";
    computerchoice.src = "assets/img/questionmark.png";
    
    result.innerHTML = "";
    result.className = "";

    playagain.classList.add("hidden");

    options.forEach(option => {
        option.disabled = false;
        option.classList.remove("disabled");
    });
});