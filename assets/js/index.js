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
let easybtn = document.getElementById("easy")
let mediumbtn = document.getElementById("medium")
let hardbtn = document.getElementById("hard")
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
       
        } else if ((computerSelection === "rock" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "rock") ||
        (computerSelection === "lizard" && playerSelection === "scissors") ||
        (computerSelection === "spock" && playerSelection === "rock")) {
    
            console.log("Computer wins!");
        result.innerHTML = `${computerSelection} beats ${playerSelection}`;
        result.classList.add("lose");
        totallives = totallives - 1;
        lives.innerHTML = `${totallives} lives remaining`
    } else {
      console.log("It's a tie!")
       result.innerHTML = "It's a tie";
       result.classList.add("tie");
      

    }


    options.forEach(option => {
        option.disabled = true;
        option.classList.add("disabled");
    });

    if (totallives == 0) {
        lives.innerHTML = "You Lose"
        return;
    }

    if (totalwins == 5) {
        tally.inerHTML ="You Won"
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

lizard.addEventListener("click", function() {
    playRound("lizard", computerPlay());
});

spock.addEventListener("click", function() {
    playRound("spock", computerPlay());
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

easybtn.addEventListener("click", function() {
    spock.classList.remove("hidden");
    lizard.classList.remove("hidden");
})
mediumbtn.addEventListener("click", function() {
    spock.classList.add("hidden");
    lizard.classList.remove("hidden");
})
hardbtn.addEventListener("click", function() {
    spock.classList.add("hidden");
    lizard.classList.add("hidden");
})


let modal = document.getElementById("hints-modal");

let openbtn = document.getElementById("open-hints");

let closebtn = document.getElementById("close-hints");


openbtn.addEventListener ("click",  function() {
  modal.style.display = "block";
} )


closebtn.addEventListener ("click",  function() {
    modal.style.display = "hidden";
  } )