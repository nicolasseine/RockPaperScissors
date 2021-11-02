let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";

// Loop through the three choices buttons 
const buttons = Array.from(document.getElementsByClassName("choice_button"));
console.log(buttons);
buttons.forEach(button => {
    button.addEventListener('click', event => {
        playRound(event.target.id) // Ids are "rock", "paper", "scissors"
    })


});



function playRound(clicked) {
    computerSelection = computerPlay();
    playerSelection = clicked;
    getResults();
    displayScore();
    endGame();

}

function computerPlay() {

    let choice = Math.floor(Math.random() * 3);
    let move = "";
    if (choice === 0) {
        move = "rock";
    }
    if (choice === 1) {
        move = "paper";
    }
    if (choice === 2) {
        move = "scissors";
    }

    return move;
}

function getResults() {
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "rock") draw(playerSelection);
            else if (computerSelection === "paper") lose(playerSelection, computerSelection);
            else if (computerSelection === "scissors") win(playerSelection, computerSelection);
            break;

        case "paper":
            if (computerSelection === "rock") win(playerSelection, computerSelection);
            else if (computerSelection === "paper") draw(playerSelection);
            else if (computerSelection === "scissors") lose(playerSelection, computerSelection);
            break;

        case "scissors":
            if (computerSelection === "rock") lose(playerSelection, computerSelection);
            else if (computerSelection === "paper") win(playerSelection, computerSelection);
            else if (computerSelection === "scissors") draw(playerSelection);
            break;

    }
}
const roundResult = document.querySelector(".round_result");


function win(playerSelection, computerSelection) {

    roundResult.textContent = "You win : " + playerSelection + " beats " + computerSelection;
    playerScore++;

}

function lose(playerSelection, computerSelection) {
    roundResult.textContent = "You lose : " + computerSelection + " beats " + playerSelection;
    computerScore++;

}

function draw(playerSelection) {
    roundResult.textContent = "It 's a draw ! You both chose " + playerSelection;
}


const currentScore = document.querySelector(".score");

function displayScore() {
    currentScore.textContent = `Computer has ${computerScore} ${(computerScore < 2) ? "point": "points"} 
    - You have   ${playerScore} ${(playerScore < 2) ? "point": "points"}`
}

mainDiv = document.querySelector(".player_selection");

function endGame() {
    if (computerScore === 5) {
        currentScore.classList.add("game_lost");
        currentScore.textContent = ` You lost ${computerScore} to ${playerScore}`;
        mainDiv.innerHTML = "<h1>GAME OVER</h1>";

    } else if (playerScore === 5) {
        currentScore.classList.add("game_won");
        currentScore.textContent = `You won ${playerScore} to ${computerScore}`;
        mainDiv.innerHTML = "<h1>GAME OVER</h1>";
    }
}