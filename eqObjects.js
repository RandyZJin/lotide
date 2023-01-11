const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙃🙃Assertion Failed: ${actual} !== ${expected}`);
  }
};

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



//test codes
// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// eqObjects(shirtObject , anotherShirtObject); // => true
// assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);


// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// // eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
// assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true)

// const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject);
// assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false) // => false

