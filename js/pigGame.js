// selectingElement


let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');
let score0El = document.querySelector('#score--0');
let score1El = document.querySelector('#score--1');
let diceEl = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let current0El = document.querySelector('#current--0');
let current1El = document.querySelector('#current--1');

// starting condition 

score0El.textContent = 0; 
score1El.textContent = 0;

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

let playing = true;

diceEl.classList.add('hidden');

let switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// rolling dice 

btnRoll.addEventListener('click', function(){

    if (playing){
    let dice = parseInt(Math.random() * 6) + 1;
    console.log(dice);   

    // display dice number as same as dice 

    diceEl.classList.remove('hidden');
    diceEl.src = `img/dice-${dice}.png`; 
    
    // checked for rolled 

    if (dice !== 1){
        // add dice to current score 
        currentScore = currentScore + dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        // current0El.textContent = currentScore;
    }else{
        // switch to next player 
        switchPlayer();
    }
}
});

btnHold.addEventListener('click', function () {
    if (playing) {
    // add current score to active player's score 
    scores[activePlayer] += currentScore;  
    // score[1] = score[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // check if player's score is >= 100

    if (scores[activePlayer] >= 20) {
        playing = false;
        // remove dice when win the game
        diceEl.classList.add('hidden'); 
        //finish the game
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else{
        //switch to next player
        switchPlayer();
    }
}
});

btnNew.addEventListener('click' , function(){
     scores = [0, 0];
     currentScore = 0;
     activePlayer = 0;
     playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
});