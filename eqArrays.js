const assertEqual = function(actual, expected) {
  let final = "";
  if (actual === expected) {
    final = console.log(`😀😀😀 ${actual} === ${expected}`);
  } else {
    final = console.log(`😔😔😔 ${actual} !== ${expected}`);
  }
  return final;
};


const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      return true;
    } else {
    return false;
    }
  }
}

//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
//Use assertEqual to write test cases for various scenarios.

//example
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false