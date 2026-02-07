"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");
*/
/*
function logger(name) {
  console.log(`My name is ${name}`);
}

// calling,running,invoking
logger("Chris");
logger("Bob");



const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(5, 4);
console.log(appleOrangeJuice);


// function declaration
function calcAge1(birthYear) {
  return 2025 - birthYear;
}

console.log(calcAge1(1975));

//function expression
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};

console.log(calcAge2(25));
*/

// Arrow Function
/*
const calcAge3 = (birthYear) => 2037 - birthYear;

console.log(calcAge3(1975));

//how many years until retirement
//
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1975, "Chris"));
console.log(yearsUntilRetirement(1967, "Bob"));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));

//literal syntax below
const friends = ["Michael", "Steven", "Peter"];

//const years = new Array(1991, 1998, 1999);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

const chris = ["Chris", "Smith", "1975", "legend", friends];

console.log(chris);

const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};

const years = [1990, 1967, 2001];

for (let x = 0; years.length - 1; x++) {
  console.log(calcAge2(years[x]));
}

const friends = ["Michael", "Steven", "Peter"];

const newLength = friends.push("Jay");

console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);
friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));

console.log(friends.includes("Steven"));


//onject literal - literally writing the object
const chris = {
  firstName: "Chris",
  surname: "Smith",
  status: "legend",
  birthYear: 1975,
  friends: ["Bob", "Matilda", "Blake"],
  hasDrivingLicense: true,
  //calcAge: function () {
  // return 2025 - this.birthYear;
  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `My name is ${this.firstName} ${this.surname}. I am a ${
      this.status
    },I am ${this.calcAge()} years old and my friends are ${this.friends[0]},${
      this.friends[1]
    } and ${this.friends[2]} and I ${
      this.hasDrivingLicense ? "have" : "havent"
    } got a driving license`;
  },
};

let preference = prompt("Give me your perference");

if (chris[preference]) {
  console.log(chris[preference]);
} else console.log("invalid");

console.log(
  `${chris.firstName} has ${chris.friends.length} friends and his best friend is called ${chris.friends[0]}`
);


chris.calcAge();
console.log(chris.age);
console.log(chris.getSummary());


for (let x = 1; x <= 10; x++) {
  console.log(`this is step number ${x}!`);
}


const chrisArray = [
  "Chris",
  "Smith",
  2037 - 1975,
  "teacher",
  ["Bob", "Matilda", "Delores"],
];

const typeofArray = [];

for (let i = 0; i < chrisArray.length; i++) {
  console.log(chrisArray[i], typeof chrisArray[i]);
  //typeofArray[i] = typeof chrisArray[i];
  typeofArray.push(typeof chrisArray[i]);
}

console.log(typeofArray);

const years = [1991, 2012, 1975, 2001];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2025 - years[i]);
}
console.log(ages);

for (let i = 0; i < chrisArray.length; i++) {
  if (typeof chrisArray[i] !== "string") continue;
  console.log(chrisArray[i], typeof chrisArray[i]);
}


const chrisArray = [
  "Chris",
  "Smith",
  2037 - 1975,
  "teacher",
  ["Bob", "Matilda", "Delores"],
];

for (let x = chrisArray.length - 1; x >= 0; x--) {
  console.log(chrisArray[x]);
}


for (let x = 0; x < 10; x++) {
  console.log("rep", x);
  for (let y = 0; y < 3; y++) {
    console.log("inner rep", y);
  }
}

let x = 1;

while (x < 10) {
  console.log(`Lifting weights ${x}!`);
  x++;
}
*/

let dice = Math.trunc(Math.random() * 6 + 1);
if (dice === 6) {
  console.log("You rolled a 6. Loop didnt start");
}
while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice === 6) {
    console.log("You rolled a 6. Loop End");
  }
}
