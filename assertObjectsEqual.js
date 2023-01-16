const eqArrays = require('./eqArrays');

const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`😀😀Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🙃🙃Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

let one = { a: '1', b: 2 };
let two = { b: 2, a: '1' };

console.log(assertObjectsEqual(one, two));

module.exports = assertObjectsEqual;
