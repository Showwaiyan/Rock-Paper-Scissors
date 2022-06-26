function computerPlay() {
    // Computer select the attribute and return this attribute

    const picker = ['rock','paper','scissors'];

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
                return false;
            }
            else {
                return true;
            }

        case ("paper"):
            if (computerSelection === "rock") {
                return true;
            }  
            else {
                return false;
            } 

        case ("scissors"):
            if (computerSelection === "paper") {
                return true;
            }  
            else {
                return false;
            }
    }
}

const selector = document.querySelector('.selection');

let PlayerSelection;
let PlayerMark = 0;

let ComputerSelection;
let ComputerMark = 0;

document.getElementById("marks").textContent = `${PlayerMark} :  ${ComputerMark}`;

selector.addEventListener('click',(e)=>{
    PlayerSelection = e.target.parentElement.dataset.card; 
    ComputerSelection = computerPlay();
    if (e.target.parentElement.matches('.players-card')) {
        const human = document.querySelector('#human-card');
        const computer = document.querySelector('#computer-card')

        human.src = `images/${e.target.parentElement.dataset.card}.png`;
        computer.src = `images/${ComputerSelection}.png`;
        
        if (PlayerSelection === ComputerSelection) return;
        else if (playRound(PlayerSelection,ComputerSelection)) PlayerMark++;
        else ComputerMark++;

        document.getElementById("marks").textContent = `${PlayerMark}  :  ${ComputerMark}`;
    }
})