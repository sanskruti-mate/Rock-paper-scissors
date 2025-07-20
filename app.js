let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const msg=document.querySelector("#msg");

const gencompChoice=()=>{
    let options=["rock","paper","scissors"];
   const randidx= Math.floor(Math.random()*3) ;
   return options[randidx];
}

const drawGame = () =>{
    console.log("Game was draw.");
    msg.innerText = "Game draw.Please try again";
    msg.style.backgroundColor="black";
}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;

        userScorePara.innerText = userScore;

        console.log("You Win!");
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You lose!");
        msg.innerText="You lose!";
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice) =>{
    console.log("User-choice: ",userChoice);

    const compChoice=gencompChoice();
    console.log("Computer choice: ",compChoice);


    if(userChoice===compChoice){
            drawGame();
    }else{
        let userWin = true;
        if(userWin==="rock"){
            //scissors,paper
            userWin = compChoice==="paper "?false:true;
        }else if(userWin==="paper"){
            userWin = compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("Choice was clicked.",userChoice);
        playGame(userChoice);
    });
});