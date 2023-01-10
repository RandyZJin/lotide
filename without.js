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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`${array1} and ${array2} are identical!`);
  } else {
    console.log(`${array1} and ${array2} are not identical!`);
  }
};

const without = function(source, itemsToRemove) {
  let removed = [];
  for (let i = 0; i < source.length; i++) {
    let match = 0;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        match += 1;
      }
    }
    if (match === 0) {
      removed.push(source[i]);
    }
  }
  return removed;
};

// test cases
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["food", "water", "air"], ["entertainment"]), ["food", "water", "air"]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const teams = ["Yankees", "Jays", "Orioles", "Rays", "Red Sox"];
without(teams, ["Rays", "Red Sox"]);
assertArraysEqual(teams, ["Yankees", "Jays", "Orioles", "Rays", "Red Sox"]);



