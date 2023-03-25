let rock = document.getElementById("rock-btn");
let paper = document.getElementById("paper-btn");
let scissors = document.getElementById("scissors-btn");
let lizard = document.getElementById("lizard-btn");
let spock = document.getElementById("spock-btn");
let totallives = 3;
let totalwins = 0;

let options = [rock, paper, scissors, lizard, spock]

let result = document.getElementById("result");
let playagain = document.getElementById("play-again");
let lives = document.getElementById("lives");
let tally = document.getElementById("tally");

let playerchoice = document.getElementById("player-choice");
let computerchoice = document.getElementById("computer-choice");

function computerPlay() {
    let choices = ["rock", "paper", "scissors", "lizard", "spock"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    playerchoice.src = "assets/img/" + playerSelection + ".png";
    computerchoice.src = "assets/img/" + computerSelection + ".png";

  


    if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "lizard" && computerSelection === "scissors") ||
        (playerSelection === "spock" && computerSelection === "rock")) {
        console.log("You win!");
        result.innerHTML = `${playerSelection} beats ${computerSelection}`;
        result.classList.add("win");
        totalwins = totalwins + 1;
        tally.innerHTML = `${totalwins} games won`
       
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "lizard" && computerSelection === "scissors") ||
        (playerSelection === "spock" && computerSelection === "rock")) {
        
        console.log("Computer wins!");
        result.innerHTML = `${computerSelection} beats ${playerSelection}`;
        result.classList.add("lose");
        totallives = totallives - 1;
        lives.innerHTML = `${totallives} lives remaining`
    } else {
      console.log("It's a tie!");
    }


    options.forEach(option => {
        option.disabled = true;
        option.classList.add("disabled");
    });

    if (totallives == 0) {
        lives.innerHTML = "You Lose"
        return;
    }

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



let modal = document.getElementById("modal-container");
let btn = document.getElementById("open");
let btnclose = document.getElementById("close");

btn.addEventListener ("click",function() {
  modal.style.display = "block";
} )

btnclose.addEventListener ("click",function() {
    modal.style.display = "none";
  } )



