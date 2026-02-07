'use strict';

// const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

// // Data needed for a later exercise

// // Data needed for first part of the section

// const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekDays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekDays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekDays[5]]: {
//     open: 0,
//     close: 23,
//   },
// };

// const restaurant = {
//   restaurantName: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   // openingHours: openingHours,
//   // above is old way

//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     mainIndex = 0,
//     starterIndex = 1,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Time of Delivery: ${time}. Address: ${address} Starter: ${this.starterMenu[starterIndex]} and the main course ${this.mainMenu[mainIndex]}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicous Pasta with ${ing1},${ing2} and ${ing3}`);
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient, otherIngredients);
//     return mainIngredient, otherIngredients;
//   },
// };
// restaurant.orderDelivery({
//   time: '23:30',
//   address: 'Admiral Court',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const arr = [2, 3, 4];

// const [a, b, c] = arr;
// console.log(a, b, c);
// /*
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// */

// const [starter, main] = restaurant.order(3, 2);
// console.log(starter, main);

// const nested = [3, 4, [5, 6]];

// const [aa, , [cc, dd]] = nested;
// console.log(aa);
// console.log(cc);
// console.log(dd);

// const [q = 1, w = 2, p = 0] = [4, 5];

// console.log(q, w, p);

// const { restaurantName, openingHours, categories } = restaurant;

// const {
//   restaurantName: resName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(resName, hours, tags);

// // getting data from an object ( normally not hardcoded like this example)
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //mutating variables

// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);

// console.log(a, b);

// //nested objects

// const {
//   fri: { open: friOpen, close: friClose },
// } = openingHours;
// console.log(friOpen, friClose);

// const arr = [7, 8, 9];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];

// const spreadArray = [1, 2, ...arr];
// console.log(spreadArray);

// console.log(...spreadArray);

// const newMainMenu = [...restaurant.mainMenu, 'pork'];
// console.log(newMainMenu);

// //shallow copy
// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 arrays =

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
/*
const ingredients = [
  prompt("Let's Make Pasta... ingredient 1 ?"),
  prompt("Let's Make Pasta... ingredient 2 ?"),
  prompt("Let's Make Pasta... ingredient 3 ?"),
];

restaurant.orderPasta(...ingredients);
*/
//object

// const newRestaurant = { founded: 1998, ...restaurant, founder: 'Me' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };

// //rest operator

// const [a, b, ...other] = [1, 2, 3, 4, 5, 6, 7];
// console.log(other);

// const [Pizza, , pork, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(sat);
// console.log(weekDays);

// const add = function (...numbers) {
//   console.log(numbers);
//   let total = 0;
//   for (let x = 0; x < numbers.length; x++) total += numbers[x];
//   console.log(total);
// };

// add(4, 5, 6, 7, 8, 9);

// const x = [23, 5, 7];

// add(...x);

// console.log(restaurant.orderPizza('mushrooms', 'cheese', 'texas BBQ'));

// console.log('--- OR OPERATOR ---');
// //short circuit evaluation.
// console.log(3 || 'Jonas');
// // if first operator is truthy then it return 3.

// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// // returns 'hello' as first truthy value.

// //restaurant.numGuests =23;

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log(' ---AND OPERATOR---');

// console.log(0 && 'Jonas');
// console.log(7 && 'jonas');
// //returns final value 'jonas'
// console.log('hello' && 23 && nul && 8);
// // returns null as falsy.

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// restaurant.numGuests = 0;

// const guests = restaurant.numGuests || 10;
// console.log(guests);

// nullish values are null and undefined
// works with nullish and not falsy.
// nullish coalesing operator
// const guestCorrect = restaurant.num ?? 10;
// console.log(guestCorrect);

// const rest1 = {
//   name: 'Capri',
//   numofGuests: 0,
// };

// const rest2 = {
//   name: 'Garci',
//   owner: 'Givani Rosi',
// };

// // rest1.numofGuests = rest1.numofGuests || 10;
// // rest2.numofGuests = rest2.numofGuests || 10;
// // OR ASSIGNMENT OPERATOR
// //same as above
// // rest1.numofGuests ||= 10;
// // rest2.numofGuests ||= 10;

// //LOGICAL NULLISH ASSIGNMENT OPERATOR*** (null or undefined)
// rest1.numofGuests ??= 10;
// rest2.numofGuests ??= 10;

// console.log(rest1, rest2);

// //anonymise name of restuarant owner
// rest1.owner = rest1.owner && 'ANONYMOUS';
// //rest2.owner = rest2.owner && 'ANONYMOUS';
// //below is same as Above
// rest2.owner &&= 'ANONYMOUS';

// console.log(rest2.owner, rest2.owner);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// // logs an array for each item with itss index.
// for (const item of menu.entries()) console.log(`${item[0] + 1}.  ${item[1]}.`);

// //better way by destruturing

// for (const [num, item] of menu.entries()) console.log(`${num + 1}.  ${item}`);

// // if (restaurant.openninghours.tue) console.log(restaurant.openingHours.fri.open);

// if (restaurant.openinghours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// //with optiomal chaining
// // only if mon exists give openning hours.mon console.log
// // stops error and gives undefined.

// console.log(restaurant.openingHours?.mon?.open);

// //Examples
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// //both nullish and optional chaining work well together.

// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`on ${day} we open at ${open}`);
// }

// //methods
// console.log(restaurant.order?.(0, 1) ?? 'order doesnt exist');

// console.log(restaurant.orderresitto?.(0, 1) ?? 'method doesnt exist');

// //optional chaining on arrays

// const users = [{ name: 'Jonas', email: 'helix.com' }];

// console.log(users[0]?.name ?? 'doesnt exist');

// //property names
// const properties = Object.keys(openingHours);

// let openStr = `We are open on  ${properties.length} days: `;

// // for (const day of properties) {
// //   openStr += `${day},`;
// // }
// // console.log(openStr);

// // //property values

// // const propertiesValues = Object.values(openingHours);
// // console.log(propertiesValues);

// // //entire object
// // const entries = Object.entries(openingHours);
// // //console.log(entries);

// // for (const [day, { open, close }] of entries) {
// //   console.log(
// //     `On the weekday ${day} we open at ${open} and we close at ${close}`
// //   );
// // }

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// //no duplicates in a set
// console.log(ordersSet);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size);

// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));

// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');

// console.log(ordersSet);
// ordersSet.delete('Risotto');
// console.log(ordersSet);

// console.log(ordersSet.has('Pizza'));

// //ordersSet.clear();
// //console.log(ordersSet);

// for (let order of ordersSet) console.log(order);

// //example

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef']).size);

// console.log(new Set('christophersmith').size);

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// //ES 2025:
// //intersection elements in both sets.

// const commonFoods = italianFoods.intersection(mexicanFoods);

// console.log('intersection: ', commonFoods);
// console.log([...commonFoods]);

// const italianAndMexican = italianFoods.union(mexicanFoods);
// //union elements in either set
// console.log('union:', italianAndMexican);

// console.log(new Set([...italianFoods, ...mexicanFoods]));

// //difference all elements in first set but not second.

// console.log(italianFoods.difference(mexicanFoods));

// console.log(italianFoods.symmetricDifference(mexicanFoods));

// // if one set is different from other....

// console.log(italianFoods.isDisjointFrom(mexicanFoods));

// const rest = new Map();

// //set used to create map

// // rest.set('name', 'Classico italiano');

// // rest.set(1, 'Florence, Italy');
// // console.log(rest.set(2, 'Lisbon Portugal'));

// // rest
// //   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// //   .set('open', 11)
// //   .set('close', 23)
// //   .set(true, 'We are open')
// //   .set(false, 'We are closed');

// // // 'gets value from true:..
// // console.log(rest.get(true));
// // console.log(rest.get(1));

// // const time = 21;
// // // console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

// // // console.log(rest.has('categories'));
// // // rest.delete(2);

// // // rest.set([1, 2], 'Test');

// // // console.log(rest);
// // // // rest.clear();
// // // console.log(rest.size);

// // const question = new Map([
// //   ['question', 'What is the best programming language in the world'],
// //   [1, 'C'],
// //   [2, 'Java'],
// //   [3, 'Javascript'],
// //   ['correct', 3],
// //   [true, 'Correct!'],
// //   [false, 'Try Again'],
// // ]);

// // //above structure is same as calling Object.entries(openHours array of array)

// // console.log(question);

// // //convert object to MAP

// // const hoursMap = new Map(Object.entries(openingHours));

// // console.log(hoursMap);
// // console.log(question.get('question'));
// // for (let [key, value] of question) {
// //   if (typeof key === 'number') console.log(`Answer ${key}:  ${value}`);
// // }

// // const answer = Number(prompt('Your Answer:'));
// // console.log(answer);
// // console.log(question.get(question.get('correct') === answer));

// // //map to array

// // console.log([...question]);
// // //below entries is same as above
// // //console.log([...question.entries()]);
// // console.log([...question.keys()]);
// // console.log([...question.values()]);

// const airline = 'TAP Air portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log('B737', [0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));

// console.log(airline.indexOf('Portugal'));
// // is case sensitive

// console.log(airline.slice(4));
// //4 is position that slice starts

// console.log(airline.slice(4, 7));
// //7 is the end of the slice
// //length is always end - beginning

// console.log(airline.slice(0, airline.indexOf(' ')));

// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// //last two letters of string

// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   //B and E are middleseats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got a middle Seat');
//   } else console.log('You got a side seat');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// //boxes string in to an object to call methods- all string methods return a primative value.

// console.log(airline.toLocaleLowerCase());
// console.log(airline.toUpperCase());

// // fix capitisation in a name

// const passenger = 'JoNas';

// const passengerLower = passenger.toLowerCase();
// console.log(passengerLower);

// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// //check email comparing emails

// const email = 'Hello@jonas.io';
// const loginEmail = 'Hello@Jonas.io \n';

// // there is also trimstart and trimend that removes ' 'from
// //start and end

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
// //replace with
// const normalisedEmail = loginEmail.toLowerCase().trim();
// console.log(normalisedEmail);

// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All Passengers come to Boarding door 23. Boarding door 23';

// console.log(announcement.replaceAll('door', 'gate'));
// // use replace or replaceAll

// //previous way

// console.log(announcement.replaceAll(/door/g, 'gate'));

// //Booleans
// //includes
// //startswith
// //endswith

// const planeN = 'Airbus A320Neo';
// console.log(planeN.includes('Boeing'));
// console.log(planeN.startsWith('Boeing'));
// console.log(planeN.endsWith('Boeing'));

// if (planeN.startsWith('Airbus') && planeN.endsWith('Neo')) console.log('yes');

// const checkBaggage = function (item) {
//   if (
//     item.toLowerCase().includes('knife') ||
//     item.toLowerCase().includes('gun')
//   ) {
//     console.log('illegal');
//   } else console.log('Welcome Aboard');
// };

// checkBaggage(' I have a laptop,somefood and a pocket Knife');

// checkBaggage('Socks and camera');
// checkBaggage('got a Gun');

// console.log('a+very+nice+string'.split('+'));
// //below is used alot
// const [firstname, Surname] = 'Chris Smith'.split(' ');
// console.log(firstname, Surname);

// const newName = ['Mr', firstname, Surname.toUpperCase()].join(' ');
// console.log(newName);

// const capitaliseName = function (name) {
//   const names = name.split(' ');
//   const nameUpper = [];

//   for (const n of names) {
//     // nameUpper.push(n[0].toUpperCase() + n.slice(1));
//     nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   return nameUpper.join(' ');
// };

// console.log(capitaliseName('jessica n smith davis'));
// console.log(capitaliseName('jonas shcmittmann'));

// //padding add things to make a string a particular length

// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(30, '+'));
// console.log(message.padEnd(25, '-'));

// const maskCardNumber = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCardNumber(3454555455445));

// //repeat
// const Warning = '**BAD WEATHER**';
// console.log(Warning.repeat(5));

// const planesInLine = 6;

// console.log(
//   `There are  ${planesInLine} planes ${'✈️'.repeat(planesInLine)} waiting`
// );

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const rows = flights.split('+');
//console.log(rows);

for (const row of rows) {
  const rowArray = row.split(';');
  const statusIcon = rowArray[0].startsWith('_Del') ? '🛑' : '✈️';
  console.log(
    `${statusIcon} ${rowArray[0].replaceAll('_', ' ')} from ${rowArray[1]
      .slice(0, 3)
      .toUpperCase()} to ${rowArray[2]
      .slice(0, 3)
      .toUpperCase()} (${rowArray[3].replace(':', 'h')})`.padStart(50, ' ')
  );
}
