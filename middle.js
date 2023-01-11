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

// TEST CODE

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`${array1} and ${array2} are identical!`);
  } else {
    console.log(`${array1} and ${array2} are not identical!`);
  }
};

const middle = function(array) {
  let result = [];
  if (array.length <= 2) {
    return result;
  }
  if (array.length % 2 === 0) {
    result.push(array[array.length / 2 - 1], array[array.length / 2]);
  } else {
    result.push(array[Math.floor(array.length / 2)]);

  }
  return result;
};

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));

