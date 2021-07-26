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
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`😀😀😀 ${array1} === ${array2}`);
  } else {
    console.log(`😔😔😔 ${array1} !== ${array2}`);
  }
};


//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.