//importing module
//import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
//curly braces for named function from shopping cart
//console.log(shippingcost);
// addToCart('bread', 5);
// console.log(price, tq);

// console.log('Importing Module');

// import shoppingCart, * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// this adds default value in to here

// can do below default and named exports but shouldnt really mix them...
// import add,{ addToCart, totalPrice as price, tq } from './shoppingCart.js';
// add('pizza', 2);

// import add, { cart } from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 5);
// add('apple', 2);

// console.log(cart);
// cart is live and connect to shoppingcart.js
// same object between both.

//top level 'await' in modules only
//blocks code as not async

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');

// const final = await res.json();

// console.log(final);

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   return { title: data.at(-1).title };
// };

// console.log(await getLastPost());

//module pattern
//use of function as private and returns is public

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shoppingCart = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   const orderstock = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };
//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// console.log(ShoppingCart2);

//commonjs and AMD modules

//commonjs still around

// exporting

// export.addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   //to import this:
//   const {addToCart} = require('./shoppingCart.js')

// import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';
//above line is possible with parcel as it finds the library includes all sorts of paths but html/images etc

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);

const stateDeepClose = cloneDeep(state);
state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClose);

//parcel understands below
//now when ever we change code it rebuilds and reloads
// the browser page without a reload.
if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('jonas' ?? null);

import 'core-js/stable';

// polyfilling async functions
import 'regenerator-runtime/runtime';
