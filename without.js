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
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`😀😀😀 ${array1} === ${array2}`);
  } else {
    console.log(console.log(`😔😔😔 ${array1} !== ${array2}`));
  }
};


const without = function(source, itemsToRemove) {
  let newSource = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newSource.push(source[i]);
    }
  }
  return newSource;
};

//const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]);
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;
