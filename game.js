let boxes=document.querySelectorAll(".box");
let message=document.getElementById("msg");
let restart=document.getElementById("restart");
let newgame=document.getElementById("newgame");
 let turnO=true;



 const winningPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(box.textContent!=="")return;
        box.textContent=turnO ?"O":"X";
        turnO=!turnO;
        box.disabled=true;
        let iswinner=winner();
    })
 })
let winner=()=>{
     for(let pattern of winningPattern){
        let[s,k,b]=pattern;
    let val1=boxes[s].textContent;
    let val2=boxes[k].textContent;
    let val3=boxes[b].textContent;
    if(val1!=="" &&val1===val2&&val2===val3){
       showWinner(val1);
    return true;
}
}
return false;
};
let showWinner=(winners)=>{
    message.innerText=`Congrats winner ${winners}`;
    boxes.forEach((box) => {
  box.disabled = true;
});

    };
    restart.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.textContent = "";
        box.disabled = false;
    });
    message.innerText = "";
    turnO = true;
});

newgame.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.textContent = "";
        box.disabled = false;
    });
    message.innerText = "";
    turnO = true;
});

   
    


