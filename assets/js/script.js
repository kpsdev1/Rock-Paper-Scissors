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
              
              
              computerSelection();
              checkWinner();
              updateDOM();
              checkScore();
  
            });
              
        }
        }
        
    /**
     * This is a function to check who has won the game 
     */
    function checkWinner() {
      
        if(computerHand === 'rock' && userHand === 'scissors'){
          roundResult.innerHTML = 'Computer';
          computerScore++;
  
        } else if (computerHand === 'paper' && userHand === 'rock'){
          roundResult.innerHTML = 'Computer';
          computerScore++;
        
        }else if(computerHand === 'scissors' && userHand === 'paper'){
          roundResult.innerHTML = 'Computer';
          computerScore++;
        
        }else if(userHand === 'rock' && computerHand === 'scissors'){
          roundResult.innerHTML = 'Player';
          playerScore++;
        
        }else if(userHand === 'paper' && computerHand === 'rock'){
          roundResult.innerHTML = 'Player';
          playerScore++;
        
        } else if(userHand === 'scissors' && computerHand === 'paper'){
          roundResult.innerHTML = 'Player';
          playerScore++;
        
        } else {
          roundResult.innerHTML = 'Tie';
        }
        computerResult.innerHTML = computerScore;
        userResult.innerHTML =  playerScore;
  
    };
  
  
    /**
     * This is a function that updates player and computer choice image
     */
    function updateDOM(){
  
          if (userHand === 'rock') {
            playerChoice.innerHTML = 'Rock';
            userImage.src = 'assets/images/rock.png';  
          } else if (userHand === 'paper'){
            playerChoice.innerHTML = 'Paper';
            userImage.src = 'assets/images/paper.png';
          } else {
            playerChoice.innerHTML = 'Scissors';
            userImage.src = 'assets/images/scissors.png';
          }
          
          if (computerHand === 'rock' ) {
            computerChoice.innerHTML = 'Rock';
            computerImage.src = 'assets/images/rock.png';
          } else if (computerHand === 'paper') {
            computerChoice.innerHTML = 'Paper';
            computerImage.src = 'assets/images/paper.png';
          } else {
            computerChoice.innerHTML = 'Scissors';
            computerImage.src = 'assets/images/scissors.png';
          }
    }
  
    function checkScore() {
      
      if (playerScore === 5) {
        messageDiv.classList.add('show');
        messageDiv.querySelector('p').innerText = 'Congratulations you won!!!';
      }
      
      if (computerScore === 5) {
        messageDiv.classList.add('show');
        messageDiv.querySelector('p').innerText = 'Commiserations, you lost!!!';
      }
  
      //if (computerScore === 2) console.log('You are complete and utter shite.');
      
    }
  
    /**
     * Reset our game back to default values.
     */
  
     playGame();
  
  })
  
  
  
    