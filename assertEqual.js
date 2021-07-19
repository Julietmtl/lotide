const assertEqual = function(actual, expected) {
  let confused = String.fromCodePoint(0x1F614);
  let happy = String.fromCodePoint(0x1F600);
  let final = "";
  if (actual === expected) {
    final = console.log(happy + happy + happy + " " + actual + " === " + expected);
  } else {
    final = console.log(confused + confused + confused + " " + actual + " !== " + expected);
  }
  return final;
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("hi", "hi");
assertEqual("he", "ha");