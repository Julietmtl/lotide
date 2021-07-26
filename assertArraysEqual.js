const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`😀😀😀 ${array1} === ${array2}`);
  } else {
    console.log(`😔😔😔 ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;



//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.