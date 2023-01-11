const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let j = 0; j < Object.keys(object1).sort().length; j++) {
    if (Object.keys(object1).sort()[j] !== Object.keys(object2).sort()[j]) {
      return false;
    }
  }
  for (let key in object1) {
    if (typeof object1[key] === "object" && !eqArrays(object1[key], object2[key])) {
      return false;
    } else if (typeof object1[key] !== "object" && object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  
  // Implement me!
  const inspect = require('util').inspect;
  // console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`😀😀Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🙃🙃Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

let one = { a: '1', b: 2 };
let two = { b: 2, a: '1' };

console.log(assertObjectsEqual(one, two));