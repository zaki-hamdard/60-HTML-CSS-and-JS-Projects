const buttons = document.querySelectorAll("button");
const resultEl = document.querySelector(".result");

const user_span = document.querySelector(".user-score");
const computer_span = document.querySelector(".computer-score");

let user_score = 0;
let computer_score = 0;


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const result = playRound(button.id, computerChoose());
        resultEl.textContent = result;
        console.log(user_score, computer_score)
    })
});



const computerChoose = function() {
    const choices = ["rock", "paper", "scissors"];
    const choosen = Math.floor(Math.random() * choices.length);
    return choices[choosen];
}

function playRound(user_choice, computer_choice) {
    if (user_choice === computer_choice) {
        return "It is a tie!";
    
    }else if ( 
        (user_choice === "rock" && computer_choice === "scissors") || 
            
        (user_choice === "paper" && computer_choice === "rock") || 
            
        (user_choice === "scissors" && computer_choice === "paper")
    ){
        user_score += 1;
        user_span.textContent = "Your Score: " + user_score;
        return "You win! " + user_choice + " beats " + computer_choice
    } else {

        computer_score += 1;
        computer_span.textContent = "Computer Score: " + computer_score;
        return "Computer wins! " + computer_choice + " beats " + user_choice;
    }
}