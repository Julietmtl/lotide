const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

module.exports = {
  head:               head, 
  tail:               tail,
  middle:             middle,
  assertArraysEqual:  assertArraysEqual,
  assertEqual:        assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters:       countLetters,
  countOnly:          countOnly,
  eqArrays:           eqArrays,
  eqObjects:          eqObjects,
  findKey:            findKey,
  flatten:            flatten,
  letterPositions:    letterPositions,
  index:              index,
  map:                map,
  takeUntil:          takeUntil,
  without:            without,
};