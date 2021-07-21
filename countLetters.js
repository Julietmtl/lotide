const assertEqual = function(actual, expected) {
  let final = "";
  if (actual === expected) {
    final = console.log(`😀😀😀 ${actual} === ${expected}`);
  } else {
    final = console.log(`😔😔😔 ${actual} !== ${expected}`);
  }
  return final;
};

const countLetters = function(word) {
  let result = {};
  for (let i of word) {
    if (i !== " ") {
      if (result[i]) {
        result[i] += 1;
      } else {
        result[i] = 1;
      }
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));

assertEqual(countLetters("lighthouse in the house")['i'], 2);