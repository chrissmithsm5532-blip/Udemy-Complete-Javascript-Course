'use strict';

/*function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `You ${firstName} are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      output = ' NEW OUTPUT';
    }

    console.log(millenial);
    console.log(output);
    //   console.log(add(2, 3));
  }

  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);



console.log(me);
//console.log(job);
//console.log(year);

var me = 'Chris';
let job = 'king';
const year = 1975;

console.log(addDec(2, 3));
//console.log(addexpression(3, 5));
//console.log(addArrow(3, 4));

function addDec(a, b) {
  return a + b;
}

const addexpression = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//example



console.log(numProducts);

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('all products deleted');
}


var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


//console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1980);

const Jonas = {
  year: 1998,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

Jonas.calcAge();

const Matilda = {
  year: 2017,
};

Matilda.calcAge = Jonas.calcAge;

Matilda.calcAge();

const f = Jonas.calcAge;

f();


// var firstName = 'Matilda';

const Jonas = {
  firstName: 'Jonas',
  year: 1998,

  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  /*solution 1
    const self = this;
    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1995);
    };
    isMillenial();
  },

  const isMillenial = () => {
    console.log(this);
    console.log(this.year >= 1981 && self.year <= 1995);
  };
  isMillenial();
}



  greet: function () {
    console.log(`Hey. ${this.firstName}`);
  },
};

Jonas.greet();
Jonas.calcAge();



//arguments keyword:

const addexpression = function (a, b) {
  console.log(arguments);
  return a + b;
};

addexpression(4, 5, 6, 7);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);

*/

const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, 'Davis');

//const marriedJessica = jessica;
//marriedJessica.lastName = 'Davis';

console.log('Before:', jessica1);
console.log('After:', marriedJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

//shallow copy
const jessicaCopy = { ...jessica2 };

jessicaCopy.lastName = 'Davis';

//console.log(jessica2, jessicaCopy);

//jessicaCopy.family.push('Mary');
//jessicaCopy.family.push('John');

console.log('Before:', jessica2);
console.log('After:', jessicaCopy);

//deep copy or deep clone

const jessicaClone = structuredClone(jessica2);
jessicaClone.family.push('Mary');
jessicaClone.family.push('John');

console.log('before cloe', jessica2);
console.log('after clone', jessicaClone);
