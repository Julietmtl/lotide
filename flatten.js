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

const flatten = function(nestedArrays) {
  let newArray = [];
  for (let i in nestedArrays) {
    if (Array.isArray(nestedArrays[i])) {
      for (let k in nestedArrays[i]) {
        newArray.push(nestedArrays[i][k]);
      }
    } else {
      newArray.push(nestedArrays[i]);
    }
  }
  return newArray;
};

//console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;
