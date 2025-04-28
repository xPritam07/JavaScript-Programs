let userScore = 0;
let comScore = 0;
let result = document.querySelector(".result");
let choices = document.querySelectorAll(".image");
let updateUserScore = document.querySelector("#score-usr");
let updateCompScore = document.querySelector('#score-comp');

const genCompChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
};

const gameDraw = () => {
    result.innerText = "Game was a Draw";
    result.style.backgroundColor = "#081b31";

};

const userWin = () => {
    result.innerText = "Congratulations! You won.";
    result.style.backgroundColor = "green";
};

const compWin = () => {
    result.innerText = "Sorry! Better luck next time.";
    result.style.backgroundColor = "red";

};

const latestUserScore = () => {
    updateUserScore.innerText = userScore;
};

const latestCompScore = () => {
    updateCompScore.innerText = comScore;
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice){
        gameDraw();
    } else {
        if (userChoice === "stone") {
            if (compChoice === "paper"){
                compWin();
                comScore+=1;
            } else {
                userWin();
                userScore+=1;
            };
        } else if (userChoice === "paper"){
            if (compChoice === "scissors"){
                compWin();
                comScore+=1;
            } else {
                userWin();
                userScore+=1;
            }; 
        } else if (userChoice === "scissors") {
            if (compChoice === "stone"){
                compWin();
                comScore+=1;
            } else {
                userWin();
                userScore+=1;
            }; 
        }
    };
    latestCompScore();
    latestUserScore();
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

