const assertEqual = function(actual, expected) {
  let confused = String.fromCodePoint(0x1F614);
  let happy = String.fromCodePoint(0x1F600);
  let final = "";
  if (actual === expected) {
    final = console.log(`${happy}${happy}${happy} ${actual} === ${expected}`);
  } else {
    final = console.log(`${confused}${confused}${confused} ${actual} !== ${expected}`);
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