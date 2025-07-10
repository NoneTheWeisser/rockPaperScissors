const choices = ['rock', 'paper', 'scissors'];
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors' ||
    userInput === 'bomb'
  ) {
    return userInput;
  } else {
    console.log('Error!');
  }
};
const getComputerChoice = () =>{
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb'){
    return 'Winner winner, you are bomb.com';
  }
  if (userChoice === computerChoice){
    return `Game is a tie, try again!`;
  }  
 if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'Computer wins! Paper covers rock';
    } else {
      return 'You win! Rock beats scissors';
    }
  }

  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'Computer wins! Scissors cut paper';
    } else {
      return 'You win! Paper covers rock';
    }
  }

  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'Computer wins! Rock crushes scissors';
    } else {
      return 'You win! Scissors cut paper';
    }
  }
};

const playGame = () => {
  const userInput = prompt("Enter 'rock', 'paper', 'scissors', or 'bomb'"); // Prompt the user for input
  const userChoice = getUserChoice(userInput);
  console.log(`You chose: ${userChoice}`);
  
  const computerChoice = getComputerChoice();
  console.log(`Computer chose: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();

// const playGame = () =>{
//   const userChoice = getUserChoice('rock');
//   console.log(`You chose: ${userChoice}`);
//   const computerChoice = getComputerChoice();
//   console.log(`Computer chose: ${computerChoice}`);

//   console.log(determineWinner(userChoice, computerChoice))
// }

// playGame();
