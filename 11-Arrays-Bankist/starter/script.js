'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

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

//Display Movements

const displayMovements = function (movements, sort = false) {
  // use splice to make a copy and then chain the sort
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Display Balance

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, movement) => acc + movement);
  labelBalance.textContent = `${account.balance}€`;
  console.log(currentAccount);
};

// display summary

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => mov * acc.interestRate)
    .filter(mov => mov >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// create user names

const createUsernames = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

let currentAccount;

//event handlers
//login button

btnLogin.addEventListener('click', function (event) {
  //prevent form from submitting
  event.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    console.log('login');

    //clearinput fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    updateDisplay(currentAccount);
  }
});

const updateDisplay = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    updateDisplay(currentAccount);
  }
});

btnLoan.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateDisplay(currentAccount);
    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener('click', function (event) {
  event.preventDefault();

  if (
    currentAccount.pin === Number(inputClosePin.value) &&
    currentAccount.username === inputCloseUsername.value
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    accounts.splice(index, 1);
    inputCloseUsername.value = inputClosePin.value = '';
    containerApp.style.opacity = 0;
  }
});

const sortState = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sortState);
  sortState = !sortState;
});

//accumulator is the sum
// const balance = movements.reduce((acc, curr) => acc + curr, 0);

// console.log(balance);

// const movementsUSD = movements.map(mov => mov * euroToUSD);
//console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// //copy of array from position 2 onwards and ends at position 4

// console.log(arr.slice(-2));
// //last two elements of array

// console.log(arr.slice(-1));
// //last element of array

// console.log(arr.slice(1, -2));

// console.log(arr.slice());
// //same as
// console.log([...arr]);
// //shallow copy of array

// //splice method
// //changes original array

// //console.log(arr.splice(2));
// //above removes elements of array so that position 0 and 1 are left in original array
// console.log(arr);

// console.log(arr.splice(-1));
// //removes last element of array
// arr.splice(1, 2);
// console.log(arr);
// // second element is how many elements are removed

// //reverse
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];

// console.log(arr2.reverse());
// // returns reverse array and mutates it.

// //concat

// const letters = arr.concat(arr2);
// console.log(letters);
// //same as (console.log([...arr,...arr2]))

// //join
// console.log(letters.join('-'));
// //creates a string joined with all letters in letters

///////////////////////////////////////////////

///at method

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// //getting last element - old styles
// console.log(arr[arr.length - 1]);
// //same as
// console.log(arr.slice(-1)[0]);

// console.log(arr.at(-1));
// //perfect for chaining

// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

////////////////////////////

// //to loop over movements array

// //for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0)
//     console.log(`Movement ${i + 1}  deposit : ${Math.abs(movement)}`);
//   if (movement < 0)
//     console.log(`Movement ${i + 1}  withdraw : ${Math.abs(movement)}`);
// }

// console.log('\n');
// //using for each of above

// movements.forEach(function (movement, index, array) {
//   if (movement > 0)
//     console.log(` ${index + 1} deposit : ${Math.abs(movement)}`);
//   if (movement < 0)
//     console.log(` ${index + 1} withdraw : ${Math.abs(movement)}`);
// });

// for each break and continue dont work
// function(movement) is the callback function
/////////////////////////////////////////

//Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: is ${value}`);
// });

// //Set

// const currenciesUnique = new Set(['USD', 'GDP', 'USD', 'EUR']);

// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: is ${value}`);
// });

// //key is the same as the value
// // should have ommited second argument but this would create a confusion forEach.

// // _ is a throw array value

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroToUSD = 1.1;

// // const movementsUSD = movements.map(function (mov) {
// //   return mov * euroToUSD;
// // });

// const movementsUSD = movements.map(mov => mov * euroToUSD);

// console.log(movements);
// console.log(movementsUSD);

// // const movementsUSDFor = [];
// // for (const mov of movements) {
// //   movementsUSDFor.push(mov * euroToUSD);
// // }
// // console.log(movementsUSDFor);

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `movement ${i + 1}: You  ${mov > 0 ? 'deposited' : 'withdrew'} movement ${
//       i + 1
//     }:  ${Math.abs(mov)}`
// );

// console.log(movementsDescriptions);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // const Deposits = movements.filter(mov => mov > 0);

// // console.log(Deposits);

// // const Withdraw = movements.filter(mov => mov < 0);

// // console.log(Withdraw);

// //calculate Max Value

// const maxValue = movements.reduce((max, curr) => {
//   if (max > curr) return max;
//   else return curr;
// }, movements[0]);

// console.log(maxValue);

// const euroToUSD = 1.1;

// const totalDepositsUSD = function (movements) {
//   return movements
//     .filter(mov => mov > 0)
//     .map(mov => mov * euroToUSD)
//     .reduce((acc, mov) => acc + mov, 0);
// };

// console.log(totalDepositsUSD(account1.movements));

// find first element that satisfys the condition
//find only returns the first element
// console.log(movements.find(mov => mov < 0));

// //filter returns them all and a new array

// console.log(accounts);

// // below find searches for an element in an array and returns the first array in which it has been found.
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');

// console.log(account);

// for (const account of accounts) {
//   if (account.owner === 'Jessica Davis') console.log(account);
//   {
//   }
// }

// console.log(movements);
// const lastwithdrawal = movements.findLast(mov => mov < 0);

// console.log(lastwithdrawal);

// console.log(
//   `Your lastest large movement was ${
//     movements.length - movements.findLastIndex(mov => mov > 1000)
//   } ago`
// );

// Equality
// console.log(movements);
// console.log(movements.includes(-130));

// //checks for a condition on any of the elements

// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Every checks for every element

// console.log(account4.movements.every(mov => mov > 0));

// //seperate callback

// const deposit = mov => mov < 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

//creates all numbers in to one array
// const arr = [[4, 5], [6, 8], 8, [4, 7, 8]];

// console.log(arr.flat());

// const arrDeep = [[[5, 7, 8], 5, 6, [4, 8], 7, 8], 9];

// // flat only goes one level deep
// console.log(arrDeep.flat());

// console.log(arrDeep.flat[2]);

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

// console.log(overallBalance);

// console.log(
//   accounts
//     .map(acc => acc.movements)
//     .flat()
//     .reduce((acc, mov) => acc + mov, 0)
// );

// //map and then flat is common.

// console.log(accounts.flatMap(acc => acc.movements));

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

// console.log(owners.sort());

// // doesnt work on numbers
// console.log(movements.sort());

//return <0 A,B (keep order)
//return >0 B,A  (switch order)

//accending order
// console.log(
//   movements.sort((a, b) => {
//     if (a > b) return 1;
//     else if (a < b) return -1;
//   })
// );

// console.log(movements.sort((a, b) => a - b));

// //decending order
// console.log(
//   movements.sort((a, b) => {
//     if (a > b) return -1;
//     else if (a < b) return 1;
//   })
// );

// console.log(movements.sort((a, b) => b - a));

// console.log(movements);

// const groupedMovements = Object.groupBy(movements, movement =>
//   movement > 0 ? 'Deposit' : 'Withdrawals'
// );

// console.log(groupedMovements);

// const groupedByActivity = Object.groupBy(accounts, account => {
//   const movementCount = account.movements.length;
//   if (movementCount >= 8) return 'very active';
//   if (movementCount >= 4) return 'active';
//   if (movementCount >= 1) return 'moderate';
//   return 'inactive';
// });

// console.log(groupedByActivity);

// //mostly used for objects to group my a category

// // const groupByAccountTypes = Object.groupBy(accounts, account => account.type);

// // console.log(groupByAccountTypes);

// //destructuring version....

// const groupByAccountTypes = Object.groupBy(accounts, ({ type }) => type);

// console.log(groupByAccountTypes);

//how to create an array

// creates an array with 7 empty elements
// because one element inside brackets
// const x = new Array(7);

// //cant map it - does nothing

// console.log(x.map(() => 5));

//below fille entire array with value of 4
//console.log(x.fill(4));

//below fills 3 at number 5 onwards
// console.log(x.fill(3, 4));

// below fills 3 from element number 4 to 6 only
// console.log(x.fill(3, 4, 6));

// const xx = new Array(2, 3, 4);

// console.log(xx);

// const filledArray = [1, 2, 3, 4, 5, 6];

// //fills 10 in positions 2-5 only
// console.log(filledArray.fill(10, 2, 5));

// //Array.from creates an array of length 7 filled with one
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// // creates an array length 7 with 1-7;
// const z = Array.from({ length: 7 }, (_, i) => i + 1);

// console.log(z);

// const random100 = Array.from({ length: 100 }, () =>
//   Math.trunc(Math.random(100) * 6 + 1)
// );
// console.log(random100);

//strings,maps and sets to convert to an Array.from
//queryselectorAll - node lists.
//convert node list to an array

// use UI to create an Array from a node.

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     element => Number(element.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
//Apparently below is the same
// const movementsUI2 = [...document.querySelectorAll('.movements__value')];
// console.log(movementsUI2);
// });

//mutates original array -descructive
// console.log(movements);
// const reversedMovements = movements.reverse();
// console.log(reversedMovements);
// console.log(movements);

//keeps original array
//slice take a shallow copy
// console.log(movements);
// const reversedMovements = movements.slice().reverse();
// // .toReversed() is same as above

// console.log(reversedMovements);
// console.log(movements);

// //also have to toSort and toSpliced dont touch original array

// // movements[1] = 2000;
// // console.log(movements);

// // instead create a new movements array

// const newMovements = movements.with(1, 2000);
// console.log(newMovements);

const bankdepositSum = accounts
  .flatMap(account => account.movements)
  .filter(account => account > 0)
  .reduce((acc, amount) => acc + amount);

console.log(bankdepositSum);

//count deposits with at least 1000 dollars

// const numDepositsMoreThan1000 = accounts
//   .flatMap(account => account.movements)
//   .filter(mov => mov > 1000).length;

// console.log(numDepositsMoreThan1000);

const numDepositsMoreThan1000 = accounts
  .flatMap(account => account.movements)
  .reduce((acc, mov) => (mov > 1000 ? acc + 1 : acc), 0);

// use ++a

console.log(numDepositsMoreThan1000);

// const ObjectSum = accounts
//   .flatMap(account => account.movements)
//   .reduce(
//     (sum, cur) => {
//       cur > 0 ? (sum.deposits += cur) : (sum.withdraw += cur);
//       return sum;
//     },
//     { deposits: 0, withdraw: 0 }
//   );

const { deposits, withdraws } = accounts
  .flatMap(account => account.movements)
  .reduce(
    (sum, cur) => {
      // cur > 0 ? (sum.deposits += cur) : (sum.withdraw += cur);
      // return sum;
      sum[cur > 0 ? 'deposits' : 'withdraws'] += cur;
      return sum;
    },
    { deposits: 0, withdraws: 0 }
  );

console.log(deposits, withdraws);

// this is a nice title => This Is a Nice Title

const convertTitleCase = function (title) {
  const capitalise = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'at', 'with'];
  const TitleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalise(word)))
    .join(' ');
  return capitalise(TitleCase);
};

console.log(convertTitleCase('This is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
