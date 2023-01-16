const eqArrays = require('./eqArrays');

// TEST CODE

const assertArraysEqual = require('./assertArraysEqual')



const flatten = function(arrays) {
  let flattenedArray = [];
  for (let i = 0; i < arrays.length; i++) {
    if (Array.isArray(arrays[i]) === true) {
      for (let j = 0; j < arrays[i].length; j++) {
        flattenedArray.push(arrays[i][j]);
      }
    } else {
      flattenedArray.push(arrays[i]);
    }
  }
  return flattenedArray;
};

console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));

module.exports = flatten;
