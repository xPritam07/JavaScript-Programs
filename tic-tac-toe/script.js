let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");

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


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked!");
        if (turnO){
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (cond of winningCondition){
        let pos1val = boxes[cond[0]].innerText;
        let pos2val = boxes[cond[1]].innerText;
        let pos3val = boxes[cond[2]].innerText;

    if (pos1val !="" && pos2val!="" && pos3val!="") {
        if (pos1val === pos2val && pos2val === pos3val) {
            console.log("Winner", pos1val);
        }
    }
    }
}