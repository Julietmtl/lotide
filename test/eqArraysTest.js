const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays')

//example
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false