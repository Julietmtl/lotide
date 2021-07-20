const assertEqual = function(actual, expected) {
  let final = "";
  if (actual === expected) {
    final = console.log(`😀😀😀 ${actual} === ${expected}`);
  } else {
    final = console.log(`😔😔😔 ${actual} !== ${expected}`);
  }
  return final;
};

const head = function(array) {
  let firstArray = array[0]
  return firstArray
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);
assertEqual(head([5]), 5);