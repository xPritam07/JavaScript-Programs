let userScore = 0;
let comScore = 0;
let result = document.querySelector(".result");
const choices = document.querySelectorAll(".image");
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



const playGame = (userChoice) => {
    console.log(`User Choice: ${userChoice}`);
    const compChoice = genCompChoice();
    console.log(`Comp choice ${compChoice}`);

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
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

