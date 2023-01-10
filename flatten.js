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


// const flatten = function (arrays) {
// 	let flattenedArray = [];
//   for (let i = 0; i < arrays.toString().split(",").length; i++) {
//   	flattenedArray.push(arrays.toString().split(",")[i]);
//   }
//   return flattenedArray;
// };

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