let choices = document.querySelectorAll(".choice")

let userCount = 0;
let compCount = 0;
let user = document.querySelector("#user");
let computer = document.querySelector("#comp")
let compChoices = ["rock","paper","scissors"];
let compChoiceMSG = document.querySelector("#comp-choice-msg");


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
            let x = compChoices[Math.floor(Math.random() * compChoices.length)];
            if(choice.id === "rock" && x === "paper"){
                compCount = compCount + 1;
                increaseScore(computer,compCount);
            }
            else if(choice.id === "rock" && x === "scissors"){
                userCount = userCount + 1;
                increaseScore(user,userCount);
            }
            else if(choice.id === "paper" && x === "rock"){
                userCount = userCount + 1;
                increaseScore(user,userCount);
            }
            else if(choice.id === "paper" && x === "scissors"){
                compCount = compCount + 1;
                increaseScore(computer,compCount);
            }
            else if(choice.id === "scissors" && x === "rock"){
                compCount = compCount + 1;
                increaseScore(computer,compCount);
            }
            else if(choice.id === "scissors" && x === "paper"){
                userCount = userCount + 1;
                increaseScore(user,userCount);
            }
            compChoiceMSG.innerText = `Computer Choice : ${x}`;
        }
    )
})
const increaseScore = (id,count) => {
    id.innerHTML = `${count}`;
}