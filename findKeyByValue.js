const assertEqual = function(actual, expected) {
  let final = "";
  if (actual === expected) {
    final = console.log(`😀😀😀 ${actual} === ${expected}`);
  } else {
    final = console.log(`😔😔😔 ${actual} !== ${expected}`);
  }
  return final;
};

const findKeyByValue = function(object, value) {
  const genreKeys = Object.keys(object);
  for (let key of genreKeys) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};
//scan the object
//return the first key with the given value
//if  no key is found, returns undefined


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);