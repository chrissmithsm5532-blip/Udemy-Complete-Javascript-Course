let js = "amazing";
//if (js === "amazing") alert("Javascript is FUN!");
/*
console.log(40 + 8 + 2 - 10);

let firstName = "Chris";
console.log(firstName);

const currentYear = new Date().getFullYear();

const ageChris = currentYear - 1975;
const ageMatilda = currentYear - 1986;
console.log(ageChris, ageMatilda);

let surname = "Smith";
console.log(firstName + " " + surname);

let x = 10;
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

const myFirstName = "Chris";
const myBirthYear = "1975";
const mySecondJob = "army";
const chris =
  " My name is " +
  firstName +
  ", I was born in " +
  myBirthYear +
  " and my second job is in the " +
  mySecondJob;
console.log(chris);

const chrisNew = `My name is ${firstName} and i am ${
  currentYear - myBirthYear
} old and my second job is working in the ${mySecondJob}`;
console.log(chrisNew);


const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`Yes you are old enough`);
} else {
  yearsLeft = 18 - age;
  console.log(`No not old enough. Wait another ${yearsLeft} years`);
}

let century;

const birthYear = 1975;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


//TYPE CONVERSION
inputYear = "1997";
console.log(Number(inputYear) + 10, inputYear);

console.log(10, String(10));

//TYPE COHERSION

console.log("I am " + 49 + " years old");

console.log("23" + "5" + 3); // changes to a string
console.log("23" - "5" - 3);


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Chris"));
console.log(Boolean({}));

const money = 0;
if (money) {
  console.log("dont spend it all");
} else {
  console.log("get a better job");
}

let height;
if (height) {
  console.log("defined");
} else {
  console.log("not defined");
}


age = 18;

if (age === 18) console.log("You are an adult");

const favourite = Number(prompt("Whats your favourite number"));

console.log(favourite);

if (favourite === 23) {
  console.log("23 is a number");
} else if (favourite === 7) {
  console.log("7 is a cool number");
} else console.log("number is not 7 or 23");

if (favourite !== 23) {
  console.log("number is not 23");
}


const day = "thursday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meet up");
    break;
  case "tuesday":
    console.log("Prepare videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("record");
    break;
  case "saturday":
  case "sunday":
    console.log("Weekend");
    break;
  default:
    console.log("not a valid day");
}

*/

// const age = 18;

// age >= 18 ? console.log("I like beer") : console.log("i like squash");

// const drink = age > 18 ? "Beer" : "Wine";
// console.log(drink);

// console.log(` I like to drink ${age >= 18 ? "beer" : "wine"}`);

function makePalindrome(s) {
  const half = Math.floor(s.length / 2);
  let counter = 0;
  for (i = 0; i < half; i++) {
    if (s.slice(i, i + 1) !== s.slice(-i)) {
      console.log("first", s.slice(i, i + 1));
      console.log("last", s.slice(-(i + 1).slice(i)));
      counter++;
    }
  }
  console.log(counter);
}

makePalindrome("hello");
