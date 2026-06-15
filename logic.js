
//computadora elige su opcion
function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3) + 1;
    let opt = "";
    if(rand === 1) {
        opt = "rock";
    } else if(rand === 2) {
        opt = "paper";
    } else {
        opt = "scissor"
    };
    return opt;
}

//comparacion de opciones y punto al ganador
let humanScore = 0;
let machineScore = 0;

const menu = document.querySelector("#menu");
const player_choice = document.querySelector("#player-choice");
const player_score = document.querySelector("#player-score");
const machine_choice = document.querySelector("#computer-choice");
const machine_score = document.querySelector("#computer-score");
const round_result = document.querySelector("#round-result");

menu.addEventListener("click", (event) => {
    let target = event.target;
    let computerChoice = getComputerChoice();
    switch (target.id) {
        case "rock":
            round_result.textContent = playRound("rock", computerChoice);
            player_choice.textContent = "rock";
            machine_choice.textContent = `${computerChoice}`;
            player_score.textContent = humanScore;
            machine_score.textContent = machineScore;
            checkWinner();
            break;
        case "paper":
            round_result.textContent = playRound("paper", computerChoice);
            player_choice.textContent = "paper";
            machine_choice.textContent = `${computerChoice}`;
            player_score.textContent = humanScore;
            machine_score.textContent = machineScore;
            checkWinner();
            break;
        case "scissor":
            round_result.textContent = playRound("scissor", computerChoice);
            player_choice.textContent = "scissor";
            machine_choice.textContent = `${computerChoice}`;
            player_score.textContent = humanScore;
            machine_score.textContent = machineScore;
            checkWinner();
            break;
        default:
            player_choice.textContent = `${target.id}`;
            machine_choice.textContent = `${computerChoice}`;
            round_result.textContent = "tie";
            break;
    }
});

function playRound(humanchoice, computerchoice){
    if(humanchoice === "rock" && computerchoice === "scissor"){
        humanScore += 1;
        return "you win rock beats scissor";
    }else if (computerchoice ==="rock" && humanchoice === "scissor"){
        machineScore += 1;
        return "you lose rock beats scissor";
    };

    if(humanchoice === "scissor" && computerchoice === "paper"){
        humanScore += 1;
        return "you win scissor beats paper";
    }else if (computerchoice ==="scissor" && humanchoice === "paper"){
        machineScore += 1;
        return "you lose scissor beats paper";
    };

    if(humanchoice === "paper" && computerchoice === "rock"){
        humanScore += 1;
        return "you win paper beats rock";
    }else if (computerchoice ==="paper" && humanchoice === "rock"){
        machineScore += 1;
        return "you lose paper beats rock";
    };

    if(humanchoice === computerchoice){
        return "tie";
    }
};

function checkWinner() {
    if (humanScore === 5) {
        round_result.textContent = "¡Ganaste! Juego terminado";
        menu.style.pointerEvents = "none";  // Desactiva los botones
    } else if (machineScore === 5) {
        round_result.textContent = "¡Perdiste! Juego terminado";
        menu.style.pointerEvents = "none";  // Desactiva los botones
    }
}