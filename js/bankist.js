// data 

// Data
let account1 = {
    owner: 'Devil Dam',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  let account2 = {
    owner: 'Davis Tem',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  let account3 = {
    owner: 'Steven Moris',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  let account4 = {
    owner: 'Smith Steele',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
  let accounts = [account1, account2, account3, account4];
  
  // Elements
  const labelWelcome = document.querySelector('.welcome');
  const labelDate = document.querySelector('.date');
  const labelBalance = document.querySelector('.balance__value');
  const labelSumIn = document.querySelector('.summary__value--in');
  const labelSumOut = document.querySelector('.summary__value--out');
  const labelSumInterest = document.querySelector('.summary__value--interest');
  const labelTimer = document.querySelector('.timer');
  
  const containerApp = document.querySelector('.app');
  const containerMovements = document.querySelector('.movements');
  
  const btnLogin = document.querySelector('.login__btn');
  const btnTransfer = document.querySelector('.form__btn--transfer');
  const btnLoan = document.querySelector('.form__btn--loan');
  const btnClose = document.querySelector('.form__btn--close');
  const btnSort = document.querySelector('.btn--sort');
  
  const inputLoginUsername = document.querySelector('.login__input--user');
  const inputLoginPin = document.querySelector('.login__input--pin');
  const inputTransferTo = document.querySelector('.form__input--to');
  const inputTransferAmount = document.querySelector('.form__input--amount');
  const inputLoanAmount = document.querySelector('.form__input--loan-amount');
  const inputCloseUsername = document.querySelector('.form__input--user');
  const inputClosePin = document.querySelector('.form__input--pin');

  let displayMovement = function (movements) {

      
      movements.forEach( function(mov, i ) {
        let type = mov > 0 ? 'deposit' : 'withdrawal';
        let html = ` <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>`;
      containerMovements.insertAdjacentHTML('beforeend', html);
    });
  };
//   displayMovement(account1.movements);
  
  let calcDisplayBalance = function(movements){
    let balance = movements.reduce((acc, mov) => acc + mov, 0 );
    labelBalance.textContent = `${balance} EUR`;
  };
//   calcDisplayBalance(account1.movements);

  let calcDisplaySummary = function (acc){
    let incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes}€`;
    let out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)}€`;

    let interest = acc.movements.map(deposit => (deposit * acc.interestRate) / 100).reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest}€`;
  }
//   calcDisplaySummary(account1.movements);

  /////////////////////////////////////////////////
  /////////////////////////////////////////////////
  // LECTURES
  
  const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);
  
 let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//  let eurToUsd = 1.1;
//  let movementsUsd = movements.map(mov => mov * eurToUsd);
//  console.log(movementsUsd);

let createUsernames = function (accs){
    accs.forEach(function(acc){
        acc.username = acc.owner.toLowerCase().split(' ').map(name => name [0]).join('');
    });
};
createUsernames(accounts);
console.log(accounts);

let deposits = movements.filter(function(mov){
    return mov > 0 ;
});
console.log(movements);
console.log(deposits);

let withdrawals = movements.filter( function(mov){
    return mov < 0 ;
});
console.log(movements);
console.log(withdrawals);
  
btnLogin.addEventListener('click', function (e){
    e.preventDefault()

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    console.log(currentAccount);

    if (currentAccount?.pin === Number(inputLoginPin.value)){
        // display  ui and message 

        labelWelcome.textContent = `Welcome back ,${currentAccount.owner.split(' ')[0]}`;
    }
    containerApp.style.opacity = 100;

    //clear input 
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // displaying movements 
    displayMovement(currentAccount.movements);

    // displaying balance
    calcDisplayBalance(currentAccount.movements);

    //displaying summary
    calcDisplaySummary(currentAccount);
})