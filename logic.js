//jugador elige su opcion

function getHumanChoice() {
    const choice = window.prompt("What is your choice? rock / paper / scissor");
    console.log(choice);
    return choice;
}

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
    console.log(opt)
    return opt;
}

//comparacion de opciones y punto al ganador


function playRound(humanchoice, computerchoice){
    let humanScore = 0;
    let machineScore = 0;
    let human = humanchoice.toLowerCase();
    if(human === "rock" && computerchoice === "scissor"){
        console.log("you win rock beats scissor")
        humanScore =+ 1;
    }else if (computerchoice ==="rock" && humanchoice === "scissor"){
         console.log("you lose rock beats scissor")
        machineScore =+ 1;
    };

    if(human === "scissor" && computerchoice === "paper"){
        console.log("you win scissor beats paper")
        humanScore =+ 1;
    }else if (computerchoice ==="paper" && humanchoice === "scissor"){
         console.log("you lose scissor beats paper")
        machineScore =+ 1;
    };

    if(human === "paper" && computerchoice === "rock"){
        console.log("you win paper beats rock")
        humanScore =+ 1;
    }else if (computerchoice ==="paper" && humanchoice === "rock"){
         console.log("you lose paper beats rock")
        machineScore =+ 1;
    };
};





function playGame() {
    for (let i = 1; i <= 5; i ++) {
        console.log(`round ${i}`);
        const humanSelection = getHumanChoice();
        const machineSelection = getComputerChoice();
        playRound(humanSelection,machineSelection);
    }

    if(humanScore < machineScore){
        console.log(`you win!! user score ${humanScore} machine score ${machineScore}`)
    }else{
        console.log(`machine win!! user score ${humanScore} machine score ${machineScore}`)
    }
}

playGame();

