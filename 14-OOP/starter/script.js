// 'use strict';

// const Person = function (firstName, birthYear) {
//   //Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   // // dont do this - creates a lot of methods within each instance
//   //   this.calcAge = function () {
//   //     console.log(2025 - this.birthYear);
//   //   };
// };

// Person.hey = function () {
//   console.log('Hey there');
// };

// Person.hey();
// //above is not inherited and not a prototype
// // jonas.hey wont work as not inherited

// // const chris = new Person('Chris', '1975');

// // console.log(chris);

// // //1. New empty object created
// // //2. Function is called. 'This' set to {}
// // //3. linked to a prototype
// // //4. function automatically return{}

// // const matilda = new Person('Matilda', '1986');

// // const jack = new Person('Jack', '1980');

// // console.log(matilda, jack);

// // const jay = 'Jay';
// // // intanceof true or false
// // console.log(chris instanceof Person);
// // console.log(jay instanceof Person);

// // //Prototypes
// // Person.prototype.calcAge = function () {
// //   console.log(2025 - this.birthYear);
// // };

// // console.log(Person.prototype);

// // matilda.calcAge();

// // // checks methods you can use on matilda
// // console.log(matilda.__proto__);
// // console.log(chris.__proto__ === Person.prototype);

// // console.log(Person.prototype.isPrototypeOf(chris));

// // //Person.prototype is not Person Protype
// // console.log(Person.prototype.isPrototypeOf(Person));

// // //prototype of linked objects property

// // Person.prototype.species = 'HomoSapiens';

// // console.log(matilda);

// // console.log(chris.hasOwnProperty('firstName'));

// // console.log(chris.hasOwnProperty('species'));

// // console.log(chris.__proto__.__proto__);
// // console.log(Person.prototype.constructor);
// // console.dir(Person.prototype.constructor);

// // const arr = [3, 4, 5, 5, 6, 7, 7]; /// new Array ===
// // console.log(arr.__proto__);
// // console.log(arr.__proto__ === Array.prototype);
// // console.log(Array.prototype);

// // console.log(arr.__proto__.__proto__);

// // //dont do below because a future version of JS might add a new prototype function with same name
// // Array.prototype.unique = function () {
// //   return [...new Set(this)];
// // };

// // console.log(arr.unique());

// // const h1 = document.querySelector('h1');
// // console.dir(x => x + 1);

// ///////////////////////////////////////
// // Coding Challenge #1

// /*
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀
// */

// // const Car = function (make, speed) {
// //   this.make = make;
// //   this.speed = speed;
// // };

// // Car.prototype.accelerate = function () {
// //   this.speed += 10;
// //   console.log(`${this.speed} km/h`);
// // };

// // Car.prototype.break = function () {
// //   this.speed -= 5;
// //   console.log(`${this.speed} km/h`);
// // };

// // const car1 = new Car('BMW', 120);
// // const car2 = new Car('Mercedes', 95);

// // car1.accelerate();
// // car1.accelerate();
// // car1.break();

// // car2.accelerate();
// // car2.accelerate();
// // car2.break();
// // CLASSES///////////////////
// //class expression

// //const PersonCl = class{}

// //class declaration

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   // Methods will be added to the prototype property of the class
//   calcAge() {
//     console.log(2025 - this.birthYear);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // checks if a name is a fullname
//   set fullName(name) {
//     //below use ._ because if use fullname it will try to set same values twice so will repeat. -producing error
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full Name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
//   //static method
//   //this keyword is the actual function

//   static hey() {
//     console.log('Hey');
//   }
// }

// const jessica = new PersonCl(`Jessica Davis`, 1996);

// console.log(jessica.age);

// console.log(jessica);

// jessica.calcAge();

// console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// jessica.greet();

// const walter = new PersonCl('Walter White', 1965);

// //1. classes are not hoisted.
// //2. Classes are first class citizens.
// //3. Classes are executes in strict mode.

// //getters and setters

// const account = {
//   owner: 'jonas',
//   movements: [200, 3, 45, 54],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// ///static methods
// //some methods are not attached to a prototype but to a constructor(Array example).
// // its in the Array Name Space
// //for example
// // Array.from (document.queryselector('h1')) - works
// //but [1,2,3].from -wont work
// //ANother example Number.parsefloat(12)

// //Object Create

// //manually set prototype to any object

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstname, birthYear) {
//     this.firstName = firstname;
//     this.birthYear = birthYear;
//   },
// };

// //below puts methods in PersonProto to Steven via inheritance
// const steven = Object.create(PersonProto);

// steven.name = 'Steven';
// steven.birthYear = 2012;

// steven.calcAge();

// const sarah = Object.create(PersonProto);

// // below is not a constructor as not using 'new'
// sarah.init('Sarah', 1979);

// ///////////////////////////////////////
// // Coding Challenge #1

// /*
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀
// */

// ///////////////////////////////////////
// // Coding Challenge #2

// /*
// 1. Re-create challenge 1, but this time using an ES6 class;
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// DATA CAR 1: 'Ford' going at 120 km/h

// GOOD LUCK 😀
// */

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is accelerated to ${this.speed} km/h`);
//   }
//   brake() {
//     this.speed += -5;
//     console.log(`${this.make} is breaking to ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return `Current Speed: ${this.speed / 1.6}`;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const bmw = new Car('BMW', 120);
// const Mercedes = new Car('Mercedes', 95);

// Mercedes.accelerate();
// Mercedes.accelerate();
// Mercedes.breke();
// Mercedes.brake();
// //get
// console.log(Mercedes.speedUS);
// //set
// Mercedes.speedUS = 1000;
// console.log(Mercedes.speed);

// const ford = new Car('Ford', 120);
// ford.accelerate();
// ford.brake();
// console.log(ford.speedUS);
// ford.speedUS = 2000;
// console.log(ford.speed);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// //below adds prototype to student protype -linking protypees
// Student.prototype = Object.create(Person.prototype);

// //then we add specifc student prototype methods like introduce
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I'm Studying ${this.course}`);
// };

// Student.prototype.constructor = Student;

// const mike = new Student('Mike', 2020, 'Computer Science');

// console.log(mike);
// mike.introduce();
// mike.calcAge();

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is accelerated to ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed += -5;
//   console.log(`${this.make} is breaking to ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   {
//     Car.call(this, make, speed);
//     this.charge = charge;
//   }
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} going at ${this.speed} km/h with a charge of ${this.charge}%`
//   );
// };

// EV.prototype.constructor = EV;

// tesla = new EV('Tesla', 100, 70);
// tesla.accelerate();
// tesla.brake();
// tesla.chargeBattery(100);
// tesla.accelerate();

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Methods will be added to the prototype property of the class
//   calcAge() {
//     console.log(2025 - this.birthYear);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // checks if a name is a fullname
//   set fullName(name) {
//     //below use ._ because if use fullname it will try to set same values twice so will repeat. -producing error
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full Name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
//   //static method
//   //this keyword is the actual function

//   static hey() {
//     console.log('Hey');
//   }
// }

// class StudentCL extends PersonCl {
//   //constructor only required if new properties like course are needed.
//   constructor(fullName, birthYear, course) {
//     //below has to happen first!
//     //this creates 'this' in this class

//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I'm Studying ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${2037 - this.birthYear}, but i feel ${2037 - this.birthYear + 10}`
//     );
//   }
// }

// const martha = new StudentCL('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I Study ${this.course}`);
// };

// const jay = Object.create(StudentProto);

// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

//encapsulation private class fields and methods
//public fields - not inherited but on instances
//private fields
//public methods
//private methods/
//static version of these 4

// class Account {
//   //public field....
//   locale = navigator.language;
//   bank = 'Bankist'; //private fields
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     //this.movements = [];
//     // this.locale = navigator.language;
//     console.log(`Thanks for openning an account, ${owner}`);
//   }
//   // public interface of objects (API)

//   //public methods:
//   getMovements() {
//     // not chainable as return is already there. works at the end
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }

//   withdrawal(val) {
//     this.deposit(-val);
//     return this;
//   }

//   //private methods
//   #approveLoan(val) {
//     //fake method example as returns true
//     return true;
//   }

//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log('Loan Approved');
//     }
//     return this;
//   }

//   // static use outside Account.test. only available on class not inherited
//   static test() {
//     return true;
//   }
// }

// const account1 = new Account('Jonas', 'EUR', 1111);
// console.log(account1);

// // account1.movements.push(250);
// // account1.movements.push(-100);

// // account1.deposit(250);
// // account1.withdrawal(140);
// // console.log(account1);
// // // accessible within global
// // console.log(account1.pin);
// // account1.requestLoan(1000);
// // account1.approveLoan(1000);

// //chaining
// // have to add return in methods 'return this'

// account1.deposit(300).withdrawal(10).requestLoan(2300).withdrawal(4000);

// console.log(account1);

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`This ${this.make} has accerated to ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`This ${this.make} has slowed down to ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
    return this;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed = this.speed + 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate();

rivian.accelerate();
rivian.brake().accelerate().brake().chargeBattery(100).accelerate();

console.log(rivian.speedUS);
