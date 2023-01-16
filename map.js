const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual')

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// test codes

const words = ["ground", "control", "to", "major", "tom"];
console.log(assertArraysEqual(map(words, word => word.toUpperCase()), ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]));


const mileage = [10, 20, 30, 40, 50];

const results2 = map(mileage, miles => miles *= 1.6);

console.log(assertArraysEqual(results2, [16, 32, 48, 64, 80]));

const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]));

module.exports = map;
