const assertEqual = require('./assertEqual');

const findKey = function(data, callback) {
  for (let key in data) {
    if (callback(data[key])) {
      return key;
    }
  }
};

let result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

/*
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, function(restaurant) {return restaurant.stars === 2}) // => "noma"

*/


console.log(assertEqual(result1, "noma"));

module.exports = findKey;
