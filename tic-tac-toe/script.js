let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector('#new-btn');
let resetGameBtn = document.querySelector("#reset");
let msgContainer =  document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 3, 6],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = () => {
    turnO = true;
    enabaleBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turnO){
            box.innerText = "O";
            box.style.color = "#ff6b6b";
            turnO = false;
        } else{
            box.innerText = "X";
            box.style.color = "#4dabf7";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const diabaleBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};

const enabaleBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    diabaleBoxes();
};

const checkWinner = () => {
    for (cond of winningCondition){
        let pos1val = boxes[cond[0]].innerText;
        let pos2val = boxes[cond[1]].innerText;
        let pos3val = boxes[cond[2]].innerText;

    if (pos1val !="" && pos2val!="" && pos3val!="") {
        if (pos1val === pos2val && pos2val === pos3val) {
            showWinner(pos1val);
        }
    }
    }
};

resetGameBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);