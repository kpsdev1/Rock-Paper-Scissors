document.addEventListener('DOMContentLoaded', () => {

let computerSelections = ['rock', 'paper', 'scissors'];
let computerHand;
let userHand;
let playerChoice = document.getElementById('playerchoice');
let computerChoice = document.getElementById('computerchoice');
let roundResult = document.getElementById('result');
let userImage =  document.getElementById('userpic');
let userResult = document.getElementById('user-result');
let computerResult = document.getElementById('computer-result');
let computerImage =  document.getElementById('comppic');
let messageDiv = document.getElementById('winnerMessage');
let playerScore = 0;
let computerScore = 0;
let resetBtn = messageDiv.querySelector('button');


function playGame() {

    let buttons = document.getElementsByTagName('button');
    
    for (let button of buttons){
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'rock') userHand = 'rock';

            else if (this.getAttribute('data-type') === 'paper') userHand = 'paper';  
            
            else userHand = 'scissors';
    
            const computerSelection = () => {
              let pick = Math.floor(Math.random() * computerSelections.length);

              if (pick === 0) {
                computerHand = 'rock';
              } else if (pick === 1) {
                computerHand = 'paper';
              } else {
                computerHand ='scissors';
              }

              
              console.log(pick);
                  
            }
          
          
        });
          
    }
    }







})