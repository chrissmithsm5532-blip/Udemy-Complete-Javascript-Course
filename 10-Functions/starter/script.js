'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // es5 way...
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = { flightNum, numPassengers, price };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH122', undefined, 1000);

// const flight = 'LM234';
// const jonas = {
//   name: 'Jonas Schmidmann',
//   passport: 234542234,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr ' + passenger.name;

//   if (passenger.passport === 234542234) {
//     alert('Check in');
//   } else {
//     alert('Passport invalid');
//   }
// };

// //primative is a copy
// //object is itself - reference to object in memory heap

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random()) * 10000000;
// };

// newPassport(jonas);
// checkIn(flight, jonas);

//passing by value / passing by reference
// passes by value not reference

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //higher order
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed String: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the Best', upperFirstWord);
// transformer('JavaScript is the Best', oneWord);

// // use callbacks all the time
// //for abstraction

// const high5 = function () {
//   console.log(`👋`);
// };

// document.body.addEventListener('click', high5);

// ['jonas', 'Matha', 'Adam'].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

//const add = (a, b) => a + b;

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');

// greeterHey('Jonas');
// greeterHey('Steven');

// greet('hi')('Jonas');

// const lufthansa = {
//   airline: 'Lufthansa',
//   IATAcode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.IATAcode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.IATAcode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Smith');
// lufthansa.book(635, 'Schemdmann');
// console.log(lufthansa.bookings);

// const eurowings = {
//   airline: 'EuroWings',
//   IATAcode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;
// //doesnt work
// //book(23, 'Nanu');

// //book.call roughly specifies 'this' keyword
// book.call(eurowings, 23, 'Smith');
// console.log(eurowings);

// book.call(lufthansa, 32, 'Drefga');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Airlines',
//   IATAcode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 2, 'me');

// //apply method
// //does same as call but doesnt recieve a list of arguments but an array instead.

// const flightData = [456, 'George Cooper'];

// book.apply(swiss, flightData);

// console.log(swiss);

// //better way is

// book.call(swiss, ...flightData);
// //above is same as apply.

// //bind method

// //book.call(swiss, 2, 'me');

// const bookEW = book.bind(eurowings);

// const bookSw = book.bind(swiss);

// const bookLH = book.bind(lufthansa);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Chris Error?');

// //with Event Listeners

// lufthansa.planes = 300;

// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application
//not interested in this keyword but still use bind.
//preset parameters

// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

// //order of arguments (this,variable,variable)
// //bind creates a new function.
// const AddVAT = addTax.bind(null, 0.23);

// console.log(AddVAT(100));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);

// console.log(addVAT2(100));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     //get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n` +
//           `${this.options.join().replaceAll(',', '\n')}\n (Write Option Number)`
//       )
//     );

//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') console.log(`${this.answers}`);
//     else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(',  ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 9, 6, 1] });

// const runOnce = function () {
//   console.log('This will never run again');
// };

// runOnce();

//below function executes once
// in brackets
// anything variables defined inside the functions below is private and encapsulated
// (function () {
//   console.log('This will never run again');
// })();

// (() => console.log('This will ALSO never run again'))();
// // also can not access private below as in a block scope.

// {
//   const private = 'private';
// }

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount}`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

// [[ here]] cant access from code.

// a closure is the closed-over variable enviroment of the execution context in which a function was created, even after that execution context is gone.

// a closure gives a function access toi all the parent function,even after that parent has function has returned. The function keeps a reference to its outer scope, whicg preserves the scope chain throughout time.

//a closure makes sure that a function doesnt loose connection tp variables that existed at the function's birth place.

// a closure is like a backpack which carries around wherever it goes. This backpack has all variables that were present in the enviroment where the function was created.

// dont have to create closures manually, this is something that javascript does automatically. A closure is not a tangible javascript object.

//Example 1

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);
// //f is reassigned to function in h

// h();
// f();
// console.dir(f);

// //Example 2

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers `);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// //callback function
// // setTimeout(function () {
// //   console.log(`TIMER`);
// // }, 1000);

// const perGroup = 1000;
// boardPassengers(180, 3);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
