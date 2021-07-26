const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']); 
  });

  it("returns ['bye', 'three', 'four'] for ['hi', 'bye', 'three', 'four']", () => {
    assert.deepEqual(tail(['hi', 'bye', 'three', 'four']), ['bye', 'three', 'four']);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

});

