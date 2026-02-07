'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// let BtnCountry = '';

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// use https://countries-api-836d.onrender.com/countries/

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

//AJAX call oldschool

// const getCountry = function (country) {
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );

//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     const html = `<article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)} Million people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//           </div>
//         </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountry('Ukraine');
// getCountry('Ghana');

//new lesson

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = ``) {
  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} Million people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   //AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );

//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     //rendercountry 1
//     renderCountry(data);

//     //get neighbour country
//     const [neighbour] = data.borders;
//     if (!neighbour) return;
//     //AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       'GET',
//       `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
//     );
//     request2.send();
//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// //getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('USA');

// //callback hell. sequentual callbacks one after another after another -avoid using promises.

//new lesson
//fetch API

//old way

//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );

//   request.send();

// const request = fetch(
//   'https://countries-api-836d.onrender.com/countries/name/portugal'
// );

// //complex

// const getCountryData = function (country) {
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// // getCountryData('portugal');

// //simplified

// const getCountryData = function (country) {
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };

// getCountryData('portugal');

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(
//     response => {
//       if (!response.ok)
//         //throw new error will reject the error
//         throw new Error(`${errorMsg} ${response.status}`);
//       return response.json();
//     }
//     //catching the error
//     //,err => alert(err)
//   );
// };

// const getCountryData = function (country) {
//   //country1
//   //fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//   getJSON(
//     `https://countries-api-836d.onrender.com/countries/name/${country}`,
//     'Country not found'
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error('No Neighbour found');
//       //country 2
//       return getJSON(
//         `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })

//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try Again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   console.log(BtnCountry);
//   // getCountryData(`${BtnCountry}`);
//   getCountryData('United Kingdom');
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.
The AJAX call will be done to a URL with this format: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
// */

// const WhereAmI = function (lat, lng) {
//   // https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.

//   const response = fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
//   )
//     .then(response => response.json())
//     .then(data => {
//       //       console.error(`${err} 💥💥💥`);

//       if (!response.ok) {
//         if (response.status === 403) {
//           throw new Error(`Forbidden ${response.status}`);
//         }
//       }
//       if (data.city === undefined || data.countryName === 'undefined') {
//         throw new Error(`Error one of the values is undefined`);
//       }
//       console.log(`You are in ${data.city}, ${data.countryName}`);
//       BtnCountry = data.countryName;
//     })
//     .catch(error => console.error(`Error fetching data`, error.message));
// };

// // WhereAmI(36.933, 42.474); //52
// WhereAmI(52.508, 13.381);
// WhereAmI(19.037, 72.873);

// console.log('test start');
// setTimeout(() => console.log(`0 seconds later`), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resoved Promise2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });
// console.log('Test End');
//1,4,3,2
//microtasks have priority over call stack

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('lottery draw is happening');
//   setTimeout(function () {
//     if (Math.random() > 0.5) {
//       resolve('You Win 🤑');
//     } else {
//       reject(new Error('You lose 💩💩'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // REAL WORLD EXAMPLE
// //promisafying - convert call backs to promises.
// //example below

// wait(1)
//   .then(() => {
//     console.log('I waited 1 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited 2 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited 3 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 4 second'));

// //above is same as the callback hell without the hell and using promises..details below

// // setTimeout(() => {
// //   console.log('1 second Passed');
// //   setTimeout(() => {
// //     console.log('2 seconds Passed');
// //     setTimeout(() => {
// //       console.log('3 seconds Passed');
// //       setTimeout(() => {
// //         console.log('4 seconds Passed');
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);
// // }, 1000);

// //static method to get a resolved immediately
// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem')).catch(x => console.error(x));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));
// console.log('getting position');

// const whereAmI = function () {
//   // https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.

//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       console.log(lat, lng);
//       return fetch(
//         `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
//       );
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocode ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.countryCode}`);
//       return fetch(
//         `https://countries-api-836d.onrender.com/countries/name/${data.countryCode}`
//       );
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found ${res.status}`);
//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥`));
// };

// btn.addEventListener('click', whereAmI);

// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

// PART 2
// 2. Comsume the promise using .then and also add an error handler;
// 3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
// 4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
// 5. After the second image has loaded, pause execution for 2 seconds again;
// 6. After the 2 seconds have passed, hide the current image.

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img1 = document.createElement('img');
//     img1.src = imgPath;
//     const img2 = document.createElement('img');
//     img2.src = img1.src.slice(0, -5) + '2.jpg';

//     img1.addEventListener('load', function () {
//       if (imageContainer) {
//         imageContainer.appendChild(img1);
//         resolve(img1);
//       }
//     });

//     img1.addEventListener('error', function () {
//       reject(new Error('Failed to load the image'));
//     });
//   });
// };

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imageContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imageContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('image not found'));
//     });
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

//  wait(2).then(() => {
//         imageContainer.parentElement.style.display = 'none';
//         imageContainer.removeChild(img1);
//         imageContainer.appendChild(img2);
//       });

//       wait(4).then(() => {
//         imageContainer.parentElement.style.display = 'flex';
//       });
//       wait(6).then(() => {
//         imageContainer.parentElement.style.display = 'none';
//         imageContainer.removeChild(img2);
//       });

// wait(2).then(() => {
//   // After 2 seconds, hide/remove first image
//   img1.style.display = 'none';   // hide just the image, not the whole container
//   imageContainer.removeChild(img1);
//   imageContainer.appendChild(img2);

//   // Now show the container again (if you hid it)
//   imageContainer.style.display = 'flex';
// });

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// //async will not stop running
// const whereAmI = async function () {
//   //geolocation
//   try {
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     //reverse geocoding
//     const resGeo = await fetch(
//       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.`
//     );
//     const dataGeo = await resGeo.json();
//     // if (!resGeo.ok) throw new Error('Problem getting locaton data');
//     // country data
//     const res = await fetch(
//       `https://countries-api-836d.onrender.com/countries/name/${dataGeo.countryCode}`
//       // await does above until promise is forfilled.
//     );
//     const data = await res.json();
//     renderCountry(data[0]);
//     //if (!renderCountry.ok) throw new Error('no country found');
//     return `You are in ${dataGeo.city}. ${dataGeo.countryCode}`;
//   } catch (err) {
//     renderError(`Something went wrong ${err.message}`);
//     //reject promise returned from async function
//     throw err;
//   }
// };

// console.log('1. Will get location');
// const city = whereAmI(); //async runs in background
// // async functions return a promise
// console.log(city);
// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.error(`${err.message} 💥💥`))
//   .finally(() => console.log('3. Finished getting location'));

// if async function has an error in it, it will still return forfilled.
//catch doesnt work for this.

//first gets printed as this is in the global execution context then the microfunction will return as it will wait until the global execution context is empty.

//async and await is sythentic sugar over then and promises.
// no chaining of promises - alot easier

// trys to execute code

// try {
//   let y = 1;
//   const x = 2;
//   y = 2;
// } catch (err) {
//   alert(err.message);
// }

// convert to async await
// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.error(`${err.message} 💥💥`))
//   .finally(() => console.log('3. Finished getting location'));

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message}  💥`);
//   }
//   console.log('3. Finished getting location');
// })();

// always use try on async functions

// below is one at a time
// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const [data1] = await getJSON(
//       `https://countries-api-836d.onrender.com/countries/name/${c1}`
//     );
//     const [data2] = await getJSON(
//       `https://countries-api-836d.onrender.com/countries/name/${c2}`
//     );
//     const [data3] = await getJSON(
//       `https://countries-api-836d.onrender.com/countries/name/${c3}`
//     );
//     console.log([data1.capital, data2.capital, data3.capital]);
//   } catch (err) {
//     console.error(err);
//   }
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok)
//       //throw new error will reject the error
//       throw new Error(`${errorMsg} ${response.status}`);
//     return response.json();
//   });
// };

// get3Countries('portugal', 'canada', 'tanzania');

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     //use promise.all for all at the same time
//     //when one of the below fails they all fail.
//     //comunator functions.
//     const data = await Promise.all([
//       getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
//       getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
//       getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`),
//     ]);

//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok)
//       //throw new error will reject the error
//       throw new Error(`${errorMsg} ${response.status}`);
//     return response.json();
//   });
// };

// get3Countries('portugal', 'canada', 'tanzania');

//recieves an array of promises and returns a promise
//first settled promise wins the race
//Promise.race;

//iife immeduately invoked function expressions

// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/italy`),
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/spain`),
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/france`),
//   ]);
//   console.log(res[0]);
// })();

// this is used when a fetch takes too much time
// great for cancelling a task if taking too long

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('request took too long'));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://countries-api-836d.onrender.com/countries/name/france`),
//   timeout(0.2),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

//promise.allsettled
//takes in an array. it returns all results

// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Success'),
// ]).then(res => console.log(res));

// Promise.all([
//   Promise.resolve('Success'),
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

//So promise.all will short circuit and fail
//promise.allsettled will return all including rejected

//Promise.any

//Promise.any  mutiple and will return first forfilled
//rejected promises are ignored(unlike race)

// Promise.any([
//   Promise.resolve('Success'),
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imageContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imageContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('image not found'));
    });
  });
};

// async function loadNPause() {
//   await createImage('img/img-1.jpg').catch(err =>
//     console.error(`${err}💥💥💥1`)
//   );
//   await wait(2);
//   img.style.display = 'none';
//   await wait(2);
//   await createImage('img/img-2.jpg').catch(err =>
//     console.error(`${err}💥💥💥2`)
//   );
//   await wait(2);
//   img.style.display = 'none';
// }

// loadNPause();

// async function loadAll(imgArr) {
//   const imgs = imgArr.map(img => {
//     createImage(img);
//   });
//   console.log(imgs);
// }

// loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

// const loadNPause = async function () {
//   try {
//     let img = await createImage('img/img-1.jpg');
//     console.log('I have loaded image 1');
//     await wait(2);
//     img.style.display = 'none';
//     img = await createImage('img/img-2.jpg');
//     console.log('I have loaded image 2');
//     await wait(2);
//     img.style.display = 'none';
//   } catch (err) {
//     console.log(err);
//   }
// };

// loadNPause();

//Part 2

const loadAll = async function (ImgArr) {
  try {
    const imgs = ImgArr.map(async img => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.log(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
