const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙃🙃Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(text) {
  let letterCount = {};
  let abbreviatedText = text.split(" ").join("").toLowerCase();
  for (let letter of abbreviatedText) {
    if (!letterCount[letter]) {
      letterCount[letter] = 0;
    }
    letterCount[letter] ++;
  }
  return letterCount;
};


//test codes

// let result = countLetters("lighthouse in the house");
// let result2 = {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }

// for (key in result) {
//   console.log(assertEqual(result[key], result2[key]))
// };