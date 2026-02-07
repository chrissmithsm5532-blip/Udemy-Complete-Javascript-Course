'use strict';

//const { CLIENT_RENEG_LIMIT } = require('tls');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2025-07-25T17:01:17.194Z',
    '2025-10-28T23:36:17.929Z',
    '2025-11-05T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed < -7) return `${daysPassed} days ago;`;

  return new Intl.DateTimeFormat(locale).format(date);
  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const combinedMovementsDates = acc.movements.map((mov, i) => ({
    movement: mov,
    movementdate: acc.movementsDates[i],
  }));

  if (sort) combinedMovementsDates.sort((a, b) => a.movement - b.movement);

  // const movs = sort
  //   ? acc.movements.slice().sort((a, b) => a - b)
  //   : acc.movements;

  combinedMovementsDates.forEach(function (obj, i) {
    const { movement, movementdate } = obj;
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(movementdate);

    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(movement, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class = "movements__date">${displayDate}</div></div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogoutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;
    //decrease timer

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent =
        'You have been logged out. Log back in to get started';
      containerApp.style.opacity = 0;
    }
    time--;
  };

  let time = 120;

  //call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
  //in each call,print the time to UI
  //when 0 in timer logout
};
///////////////////////////////////////
// Event handler

let currentAccount, timer;

//Fake always loggedin

// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

//Experimenting API
// const now = new Date();
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'long',
//   year: 'numeric',
//   weekday: 'long',
// };
// const locale = navigator.language;
// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      //month: 'long',
      month: 'numeric',
      year: 'numeric',
      //weekday: 'long',
    };
    //const locale = navigator.language;

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hours = now.getHours().padStart(2, 0);
    // const minutes = now.getMinutes().padStart(2, 0);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //start timer
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
    //reset timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    setTimeout(function () {
      currentAccount.movements.push(amount);
      //Add Transfer Date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';
  clearInterval(timer);
  timer = startLogoutTimer();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//all numbers are represented by floating point
//64 based

//Base 10 0-9
//Binary 2 0-1

// console.log(0.1 + 0.2);

//Convert strings to numbers
//Number ('23') is same as
// console.log(+'23');

// below tries to find a number
//string has to start with a number
// 10 represents Base 10

// //use parseInt to get a number
// console.log(Number.parseInt('30px', 10));

// console.log(Number.parseInt('2.5rem'));

// console.log(Number.parseFloat('2.5rem'));

//above are global functions so can

// console.log(parseFloat('2.5rem'));

// // encouraged to use Number object -new way

// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20X'));
// console.log(Number.isNaN(23 / 0));

// // isfinite better to check if a number
// //and not a a string
// //ULTIMATE METHOD
// // or isInteger if integer

// console.log(Number.isFinite(20));

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// //does type cohersion doesnt parsing '23px'
// console.log(Math.max(5, 18, '23', 11, 2));

// console.log(Math.min(5, 18, 23, 11, 2));

// console.log(Math.PI * parseFloat('10px') ** 2);
// //this gives area of circle with 10px radius

// console.log(Math.trunc(Math.random() * 6) + 1);
// // dice roll between 1 and 6

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(randomInt(10, 20));
// console.log(randomInt(0, 3));

// // Rounding Integers
// //all below do type cohersion

// //removes decimal part
// console.log(Math.trunc(23.3));

// // rounds up / down
// console.log(Math.round(23.56));

// // round up
// console.log(Math.ceil(23.9));

// //round down
// console.log(Math.floor(23.6));

// //floor and trunc works for postive numbers but
// //for negative numbers floor rounds down.. floor is better.

// //Rounding decimals.(floating points)

// //returns a string not a number....
// console.log((2.7).toFixed(0));

// console.log((2.7).toFixed(3));

// console.log((2.345).toFixed(2));
// //convert to number...
// console.log(+(2.345).toFixed(2));

// //Remainder operator
// console.log(5 % 2);

// console.log(8 % 3);
// console.log(8 / 3);

// //checks if a number is even or odd

// // so below (number%2) checks if a number is even or odd by remainder
// console.log(6 % 2);
// console.log(7 % 2);

// const isEven = number => number % 2 === 0;

// console.log(isEven(3));
// console.log(isEven(2));

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//     if (i % 3 === 0) row.style.backgroundColor = 'green';
//   });
// });

// const diameter = 287_460_000_000;
// // underscore used instead of commas.

// console.log(diameter);
// //above ignores _

// const price = 345_99;
// console.log(price);

// const transferFee = 15_00;
// console.log(transferFee);

// const PI = 3.1415;
// // cant place underscore at beginning,end or next to '.'
// //or two in a row

// console.log(Number('230_000'));
// //above wont work.

// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);

// how to use a large number BigInt

// console.log(45645564575454657767474767475647576n);
// //n makes it big

// console.log(BigInt(45645564575454657767474767475647576));

// //operations
// console.log(1000n + 1000n);
// console.log(4535654465457456357n * 5334345665354n);

// const huge = 2345346346363436454n;
// const num = 23;
// // console.log(huge * num);
// //BigInt can only operate on BigInts

// console.log(20n > 15);
// //above still works

// // console.log(20n === 20);
// //wont work

// //cant use Math methods on bigInts

// console.log(10n / 3n);
// //cuts off decimal points

//creating a date
/*
const now = new Date();
console.log(now);

console.log(new Date('Nov 05 2025 16:06:20 '));
//below is unreliable
console.log(new Date('December 24,2015'));

console.log(account1.movementsDates[0]);
//z is universal

console.log(new Date(2037, 10, 19, 15, 34, 5));
//month is 0 based

console.log(new Date(2037, 10, 31, 15, 34, 5));
// above auto corrects to december as no 31st in November

console.log(new Date(0));
// date from 1970 Jan 1

console.log(new Date(3 * 24 * 60 * 60 * 1000));
// 3 days after this
//259200000 = time stamp
*/

//Working with Dates

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDay());
// console.log(future.getDate());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());

// console.log(new Date(2142256980000));
// console.log(new Date(1596388836977));
// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
// console.log(days1);

// const num = 3044555445.23;

// const options = {
//   style: 'currency',
//   unit: 'celsius',
//   currency: 'EUR',
//   //useGrouping: false,
// };

// console.log('US:  ', new Intl.NumberFormat('en-US', options).format(num));

// console.log('Germany:  ', new Intl.NumberFormat('de-DE', options).format(num));

// console.log('Syria:  ', new Intl.NumberFormat('ar-SY', options).format(num));

// console.log(
//   'Browser:  ',
//   new Intl.NumberFormat(navigator.language, options).format(num)
// );

// once JAvascript hits this line of code it waits 3 seconds = asyncronous javascript

//below uses arguments 3 and 4. first one is the action, second one is the delay

//set timout for after a specific time
// const ingredients = ['olives', 'spinich'];

// const pizzaTimer = setTimeout(
//   (ing1, ing2) => console.log(`Here is your Pizza🍕 with ${ing1} and ${ing2}`),
//   3000,
//   ...ingredients
// );

// console.log('Waiting');

// if (ingredients.includes('spinich')) clearTimeout(pizzaTimer);

// //settInterval constant not just one delay
// //displays clock

// setInterval(function () {
//   const now = new Date();
//   const hours = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = `${now.getSeconds()}`.padStart(2, 0);
//   console.log(`${hours}:${minutes}.${seconds}`);
// }, 1000);
