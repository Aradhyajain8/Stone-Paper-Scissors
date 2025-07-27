const images = document.querySelectorAll('img');
const msg = document.querySelector('#msg');
const computerScore = document.querySelector('#comp-score');
const user_score = document.querySelector('#user-score');
const newGame = document.querySelector('#new-game');

let userScore = 0;
let compScore = 0;

const compChoice = function(){
    const options = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = Math.trunc(Math.random() * 3);
    // console.log('computer choice ',options[randomChoice]);

    return options[randomChoice];
}


const playGame = function(userChoice){
    // generate computer choice 
    const compChoose = compChoice();

    if(userChoice === compChoose){
        msg.textContent = 'it\'s a Draw! play again';
        msg.style.backgroundColor = '#081b31';
    }
    else if(userChoice === 'Scissors' && compChoose === 'Rock' ||
            userChoice === 'Rock' && compChoose === 'Paper' ||
            userChoice === 'Paper' && compChoose === 'Scissors'){
                msg.textContent = 'Oops! you loose';
                msg.style.backgroundColor = 'red';
                compScore++;
                computerScore.textContent = compScore; 
    }
    else{
        msg.textContent = 'Yayay! You win';
        msg.style.backgroundColor = 'green';
        userScore++;
        user_score.textContent = userScore;
    }

};

// user's choice
images.forEach(img => img.addEventListener('click', () => {
    // console.log('clicked image ',img);
    const userChoice = img.getAttribute('alt');
    // console.log('user choice ',userChoice);

    playGame(userChoice);
}))

// new game
newGame.addEventListener('click', function(){

    //setting user score
    userScore = 0;
    user_score.textContent = '0';

    // setting comp score
    compScore = 0;
    computerScore.textContent = '0';

    // msg display
    msg.textContent = 'Play your move';
    msg.style.backgroundColor = '#081b31';
});
