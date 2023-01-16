const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual')

const letterPositions = function(sentence) {
  const results = {};
  let str = sentence.trim().split(" ").join("").toLowerCase();
  for (let letter in str) {
    if (!results[str[letter]]) {
      results[str[letter]] = [];
    }
    // doesn't work properly without next line
    let lastPos = results[str[letter]][results[str[letter]].length - 1];
    results[str[letter]].push(sentence.indexOf([str[letter]], lastPos + 1));
  }
  // logic to update results here
  return results;
};

module.exports = letterPositions;




// test codes
// console.log(letterPositions("Hello world"));
// let result1 = letterPositions("Hello world");
// let result2 = {h: [0], e:[1], l: [2, 3, 8], o: [4, 6], w: [5], r: [7], d: [9]};

// let result1 = letterPositions("lighthouse in the house");
// let result2 = {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// };


// for (let key in result1) {
//   console.log(assertArraysEqual(result1[key], result2[key]));
// }

