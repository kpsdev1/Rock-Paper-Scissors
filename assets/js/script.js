document.addEventListener('DOMContentLoaded', () => {
	// declaring variables
	let computerSelections = ['rock', 'paper', 'scissors'];
	let computerHand;
	let userHand;
	let playerChoice = document.getElementById('playerchoice');
	let computerChoice = document.getElementById('computerchoice');
	let roundResult = document.getElementById('result');
	let userImage = document.getElementById('userpic');
	let userResult = document.getElementById('user-result');
	let computerResult = document.getElementById('computer-result');
	let computerImage = document.getElementById('comppic');
	let messageDiv = document.getElementById('winnerMessage');
	let playerScore = 0;
	let computerScore = 0;
	let resetBtn = messageDiv.querySelector('button');
	let startMsg = document.getElementById('start-message');
	let rockBtn = document.getElementById('rock');
  	let paperBtn = document.getElementById('paper');
  	let scissorsBtn = document.getElementById('scissors');
	let btn = document.getElementById('start-button');
	let hideBtn = document.querySelector('.btn-container');

	startMsg.classList.add('show');
	rockBtn.disabled = true;
  	paperBtn.disabled = true;
 	scissorsBtn.disabled = true;
	hideBtn.classList.add('hide');

	/**
	 * This is the main function which loops through the buttons and adds an event listner, 
	 * depending on which button is clicked the UserHand is set and then the computerHand 
	 * is chosen randomely(computerSelection), then the functions are called to check the 
	 * winner of the round(checkWinner) and change the hand selection images(updateDom) 
	 * and then check the score to see if 5  point is reached(checkScore).
	 */
	function playGame() {
		let buttons = document.getElementsByTagName('button');
		for(let button of buttons) {
			button.addEventListener('click', function() {
				if(this.getAttribute('data-type') === 'rock') userHand = 'rock';
				else if(this.getAttribute('data-type') === 'paper') userHand = 'paper';
				else userHand = 'scissors';
				const computerSelection = () => {
					let pick = Math.floor(Math.random() * computerSelections.length);
					if(pick === 0) {
						computerHand = 'rock';
					} else if(pick === 1) {
						computerHand = 'paper';
					} else {
						computerHand = 'scissors';
					}
				};
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
		if(computerHand === 'rock' && userHand === 'scissors') {
			roundResult.innerHTML = 'Computer';
			computerScore++;
		} else if(computerHand === 'paper' && userHand === 'rock') {
			roundResult.innerHTML = 'Computer';
			computerScore++;
		} else if(computerHand === 'scissors' && userHand === 'paper') {
			roundResult.innerHTML = 'Computer';
			computerScore++;
		} else if(userHand === 'rock' && computerHand === 'scissors') {
			roundResult.innerHTML = 'Player';
			playerScore++;
		} else if(userHand === 'paper' && computerHand === 'rock') {
			roundResult.innerHTML = 'Player';
			playerScore++;
		} else if(userHand === 'scissors' && computerHand === 'paper') {
			roundResult.innerHTML = 'Player';
			playerScore++;
		} else {
			roundResult.innerHTML = 'Tie';
		}
		computerResult.innerHTML = computerScore;
		userResult.innerHTML = playerScore;
	}
	/**
	 *This is a function to update player and computer hand image
	 */
	function updateDOM() {
		if(userHand === 'rock') {
			playerChoice.innerHTML = 'Rock';
			userImage.src = 'assets/images/rock.png';
		} else if(userHand === 'paper') {
			playerChoice.innerHTML = 'Paper';
			userImage.src = 'assets/images/paper.png';
		} else {
			playerChoice.innerHTML = 'Scissors';
			userImage.src = 'assets/images/scissors.png';
		}
		if(computerHand === 'rock') {
			computerChoice.innerHTML = 'Rock';
			computerImage.src = 'assets/images/rock.png';
		} else if(computerHand === 'paper') {
			computerChoice.innerHTML = 'Paper';
			computerImage.src = 'assets/images/paper.png';
		} else {
			computerChoice.innerHTML = 'Scissors';
			computerImage.src = 'assets/images/scissors.png';
		}
	}
	/**
	 * Function to check who has won by reaching the score of 5 and display winning popup.
	 */
	function checkScore() {
		if(playerScore === 5) {
			messageDiv.classList.add('show');
			messageDiv.querySelector('p').innerText = 'Congratulations you won!!!';
			rockBtn.disabled = true;
			paperBtn.disabled = true;
			scissorsBtn.disabled = true;
		}
		if(computerScore === 5) {
			messageDiv.classList.add('show','lose');
			messageDiv.querySelector('p').innerText = 'Commiserations, you lost!!!';
			rockBtn.disabled = true;
			paperBtn.disabled = true;
			scissorsBtn.disabled = true;
		}
	}
	/**
	 * Reset our game back to default values.
	 */
	function resetGame() {
		playerScore = 0;
		computerScore = 0;
		userResult.innerHTML = '0';
		computerResult.innerHTML = '0';
		userImage.src = 'assets/images/questionmark.png';
		computerImage.src = 'assets/images/questionmark.png';
		playerChoice.innerHTML = '';
		computerChoice.innerHTML = '';
		roundResult.innerHTML = '';
		computerHand = '';
		userHand = '';
		messageDiv.classList.remove('show','lose');
		startMsg.classList.remove('show');
		rockBtn.disabled = false;
		paperBtn.disabled = false;
		scissorsBtn.disabled = false;
		hideBtn.classList.remove('hide');
	}
    // calling the playgame function
	playGame();

	// adding event listeners to the start game and reset game buttons, so that they reset all defaults when clicked
	resetBtn.addEventListener('click', resetGame);
	btn.addEventListener('click', resetGame);
});