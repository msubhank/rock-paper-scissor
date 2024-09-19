let userScore=0;
let compScore=0;

const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');
const userScoreP=document.querySelector('#U-Score');
const compScoreP=document.querySelector('#C-Score');
const reset=document.querySelector('#btn1');



const compChoice= ()=>{
let options=["rock","paper","scissor"];
const rIndex=Math.floor(Math.random()*3);
return options[rIndex];
}

const draw=()=>{
//console.log("Its an draw game");
msg.innerText="Game was Draw";
msg.style.backgroundColor ="rgba(5, 9, 43, 0.952)";
}

const showWinner=(userwin , userChoice , compC)=>{
    if(userwin){
     //   console.log("U are the  Winner");
        userScore++;
        userScoreP.innerText=userScore;
        msg.innerText=`You Win the Game! Your ${userChoice} beats  ${compC}`;
        msg.style.backgroundColor ="green";
    }
    else{
        compScore++;
        compScoreP.innerText=compScore;
     //   console.log("Computer is the Winner")
        msg.innerText=`You Lose the Game! ${compC} beats Your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}

const playGame = (userChoice)=>{
    console.log("The user choice is :" , userChoice);
    // computer choice 
const compC=compChoice();
console.log("the comp choice is :", compC)

if(userChoice===compC){
draw();
}
else{
    let userwin=true;
    if(userChoice==='rock'){
        // if , else statement shortform 
        userwin=compC ==="paper"? false : true;
    }

    else if(userChoice==='paper'){
        userwin=compC ==="scissor"? false : true;
    }

    else if(userChoice==='scissor'){
        userwin=compC==="rock"? false : true;
    }
    showWinner(userwin , userChoice,compC);
}
}

choices.forEach((choice)=>{
    choice.addEventListener("click" , ()=>{
        const userChoice=choice.getAttribute("id");
      //  console.log("choice was clicked", userChoice)
        playGame(userChoice);
    });
})


reset.addEventListener('click', ()=>{
    userScore=0;
    compScore=0;

    userScoreP.innerText=userScore;
    compScoreP.innerText=compScore;
    msg.innerText="Play Your Move";
    msg.style.backgroundColor=" rgba(5, 9, 43, 0.952)";
})
