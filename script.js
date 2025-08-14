let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#new-btn")
let msgcontainer = document.querySelector(".msg");
let msg = document.querySelector("#message")
let turnofo = true;
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnofo){
            box.innerText="O";
            turnofo=false;
        }
        else{
            box.innerText="X";
            turnofo=true;
        }
        box.disabled = true;
        checkwinner();

    });
});
const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=" ";
    }
}
const resetgame =()=>{
    turnofo = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
const showWinner= (winner)=>{
    msg.innerText=`congrats,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkwinner = ()=>{
    for(let pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val!="" && pos3val!=""){
            if(pos1val == pos2val && pos2val == pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
                
            }
        }
    }
}
 
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);


