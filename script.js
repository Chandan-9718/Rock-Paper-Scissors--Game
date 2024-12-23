let userScore = 0;
let compScore = 0;

// All(.choice) class ke naam ko access krne ke liye document.querySelectorAll likha gya h .
const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const optinos= ["rock" , "paper" , "scissors"];
    const randIdx  = Math.floor(Math.random() * 3);
    return optinos[randIdx];
}
 const drawGame = () => {
    // console.log("game was draw.");
    msg.innerText = "Game was Draw, Play Again";
    msg.style.background = "#081b31"; 
};

 const shoWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        // console.log("you win!");
       userScore++;
       userScorePara.innerText = userScore;
        msg.innerText = `win win ${userChoice} beats ${compChoice}`;
       msg.style.background = "green";
    }else{
        // console.log("you lose");
        compScore++;
        userScorePara.innerText = compScore;
        msg.innerText = `You lose ${compChoice} beats your ${userChoice}`;
        msg.style.background = "red";
    }
 }
const playGame = (userChoice) => {
    // console.log("user choice = ",userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    // console.log("comp choice =",compChoice);

    if(userChoice === compChoice){
        //Draw game 
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            // scissors , paper
          userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            // rock , scissors 
            compChoice === "scissors" ? false : true;
        }else{
            // rock , paper 
          userWin = compChoice === "rock" ? false : true;
        }
        shoWinner(userWin);
    }
};



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choices was click!",userChoice);
        playGame(userChoice , userChoice , compScore);
    });
});
 