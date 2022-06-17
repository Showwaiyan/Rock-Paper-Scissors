function computerPlay() {
    // Computer select the attribute and return this attribute

    const picker = ['Rock','Paper','Scissors'];

    // Chose random index to get the picker element
    const randElement = (index) => {
        let min = Math.ceil(0);
        let max = Math.floor(2);
        return Math.floor(Math.random() * (max-min +1) + min);
    }

    return picker[randElement()];
}


function playRound(playerSelection, computerSelection) {
    // Each round of a game player

    switch (playerSelection) {
        case ("rock"):
            if (computerSelection === "paper") {
                console.log("You Lose! Paper beats Rock");
                return false;
            }
            else {
                console.log("You Win! Rock beats Scissors");
                return true;
            }

        case ("paper"):
            if (computerSelection === "rock") {
                console.log("You Win! Paper beats Rock");
                return true;
            }  
            else {
                console.log("You Lose! Scissors beats Paper");
                return false;
            } 

        case ("scissors"):
            if (computerSelection === "paper") {
                console.log("You Win! Scissors beats Paper");
                return true;
            }  
            else {
                console.log("You Lose! Rocks beats Scissors");
                return false;
            }
    }
}

function game() {
    // Main loop of the game
    let gamestate = 0
    for (let i = 0; i < 5; i++) {
        let PlayerSelection = window.prompt("What is your choice : ");
        let ComputerSelection = computerPlay();

        if (PlayerSelection === ComputerSelection) {
            // Test the two input is same to be draw round
            console.log("Draw! Play Again");
            continue;
        }

        if (playRound(PlayerSelection.toLowerCase(), ComputerSelection.toLowerCase())) {
            gamestate++;
        }
        else gamestate--;
    } 
    console.log(gamestate > 0 ? "You Win!" : gamestate == 0 ? "Draw!" : "Computer Win!");
}

game();
