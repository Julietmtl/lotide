const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3);

const newWords = ["hi", "bye", "three", "four"];
assertEqual(tail(newWords).length, 3);
assertEqual(tail(newWords)[0], "bye");

