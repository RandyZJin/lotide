const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙃🙃Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(database, criteria) {
  for (let key in database) {
    if (database[key] === criteria) {
      return key;
    }
  }
  return undefined;
};

// alternate method

// const findKeyByValue = function(database, criteria) {
//   for (key of Object.keys(database)) {
//     if (database[key] === criteria) {
//       return key;
//     }
//   }
//   return undefined;
// };


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const divisionChamps = {
  al_east: "Yankees",
  al_central: "Guardians",
  al_west: "Cheaters",
  nl_east: "Braves",
  nl_central: "Cardinals",
  nl_west: "Dodgers",

};
assertEqual(findKeyByValue(divisionChamps, "Yankees"), "al_east");
assertEqual(findKeyByValue(divisionChamps, "Blue Jays"), undefined);