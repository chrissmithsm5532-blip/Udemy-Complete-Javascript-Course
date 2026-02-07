// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 5];
const temperatures2 = [3, 4, 5, 6, 7, 8, 9];
const numArray = [];
let counter = 0;
/*
for (let x = 0; x < temperatures.length; x++) {
  if (typeof temperatures[x] === 'string') {
    x++;
    counter--;
  }
  if (typeof temperatures[x] === 'number');

  numArray[x + counter] = temperatures[x];
}

let highest = numArray[0];
let lowest = numArray[0];

for (let y = 1; y < numArray.length; y++) {
  if (numArray[y] > highest) highest = numArray[y];
}

for (let y = 1; y < numArray.length; y++) {
  if (numArray[y] < lowest) lowest = numArray[y];
}

console.log(lowest, highest);
console.log(`Amplitude = ${highest - lowest}`);

const mergeArray = function (arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  return arr1;
};

console.log(mergeArray(temperatures, temperatures2));


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: prompt('Degrees calsius'),
  };
  10;

  const kelvin = Number(measurement.value) + 273;
  return kelvin;
};

console.log(measureKelvin());
*/

const printForecast = function (arr) {
  let printout = '... ';
  for (let x = 0; x < arr.length; x++) {
    printout += `${arr[x]}°C in ${x + 1} days ... `;
  }
  console.log(printout);
};

printForecast([12, -5, 0, 4]);
