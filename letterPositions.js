const letterPositions = function(sentence) {
  const results = {};
  for (let index in sentence) {
    if (results[sentence[index]] === undefined) {
      results[sentence[index]] = [];
      }
    if (index !== " ") {
        results[sentence[index]].push(parseInt(index));
      }
  }
  return results;
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
  console.log(console.log(`😔😔😔 ${array1} !== ${array2}`));
  }
};

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").l, [2, 3])