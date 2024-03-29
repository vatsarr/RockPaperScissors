const computerPlay = document.getElementById("computer-play");
const computerMessage = document.getElementById("computer-message");
const userPlayRock = document.getElementById("rock");
const userPlayPaper = document.getElementById("paper");
const userPlayScissors = document.getElementById("scissors");
const resultDisplay = document.getElementById("result-display");
const score = document.getElementById("score");

const footer = document.getElementById("footer");
footer.innerHTML = `Risto Vatsar &#169; ${new Date().getFullYear()}`;

const playerButtons = document.querySelectorAll("#rock, #paper, #scissors");

let computerChoice;
let userChoice;

let playerScore = 0;
let computerScore = 0;

function playGame() {
    playerButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // do something when the button is clicked

            userChoice = button.id;
            getComputerPlay();
            getResult();
            displayScore();
        });

        button.addEventListener("touch", function () {
            // do something when the button is clicked

            navigator.vibrate([500]);

            userChoice = button.id;
            getComputerPlay();
            getResult();
            displayScore();
        });
    });
}

function getComputerPlay() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            computerPlay.classList = "fa-solid fa-hand-back-fist";
            computerChoice = "rock";
            break;
        case 2:
            computerPlay.classList = "fa-solid fa-hand";
            computerChoice = "paper";
            break;

        case 3:
            computerPlay.classList = "fa-solid fa-hand-scissors";
            computerChoice = "scissors";
            break;

        default:
            computerPlay.classList = "fa-solid fa-question";
            break;
    }
}

function getResult() {
    switch (userChoice + computerChoice) {
        case "scissorspaper":
        case "rockscissors":
        case "paperrock":
            playerScore++;
            resultDisplay.style.color = "#14A44D";
            resultDisplay.classList = "fa-solid fa-trophy";
            break;
        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
            computerScore++;
            resultDisplay.style.color = "#DC4C64";
            resultDisplay.classList = "fa-solid fa-face-sad-cry";
            break;
        case "paperpaper":
        case "scissorsscissors":
        case "rockrock":
            resultDisplay.style.color = "#E4A11B";
            resultDisplay.classList = "fa-solid fa-handshake";
            break;
    }
}

function displayScore() {
    score.innerHTML = `User: ${playerScore} <br> CPU: ${computerScore}`;
}

function getRandomInt() {
    return Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
}

playGame();
