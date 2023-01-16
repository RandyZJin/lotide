const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual')


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


module.exports = without;




