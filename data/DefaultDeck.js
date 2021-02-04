const plusZero = require('../assets/plusZero.png');
const plusOne = require('../assets/plusOne.png');
const plusTwo = require('../assets/plusTwo.png');
const minusOne = require('../assets/minusOne.png');
const minusTwo = require('../assets/minusTwo.png');
const miss = require('../assets/miss.png');
const doubleDamage = require('../assets/double.png');

//Gloomhavens default combat deck.

export const DefaultDeck = [
  { id: 'plusOne1', title: '+1', img: plusOne, backgroundColor: 'green' },
  { id: 'plusOne2', title: '+1', img: plusOne, backgroundColor: 'green' },
  { id: 'plusOne3', title: '+1', img: plusOne, backgroundColor: 'green' },
  { id: 'plusOne4', title: '+1', img: plusOne, backgroundColor: 'green' },
  { id: 'plusOne5', title: '+1', img: plusOne, backgroundColor: 'green' },
  { id: 'plusZero1', title: '+0', img: plusZero, backgroundColor: 'grey' },
  { id: 'plusZero2', title: '+0', img: plusZero, backgroundColor: 'grey' },
  { id: 'plusZero3', title: '+0', img: plusZero, backgroundColor: 'grey' },
  { id: 'plusZero4', title: '+0', img: plusZero, backgroundColor: 'grey' },
  { id: 'plusZero5', title: '+0', img: plusZero, backgroundColor: 'grey' },
  { id: 'plusZero6', title: '+0', img: plusZero, backgroundColor: 'grey' },
  { id: 'minusOne1', title: '-1', img: minusOne, backgroundColor: 'red' },
  { id: 'minusOne2', title: '-1', img: minusOne, backgroundColor: 'red' },
  { id: 'minusOne3', title: '-1', img: minusOne, backgroundColor: 'red' },
  { id: 'minusOne4', title: '-1', img: minusOne, backgroundColor: 'red' },
  { id: 'minusOne5', title: '-1', img: minusOne, backgroundColor: 'red' },
  { id: 'plusTwo', title: '+2', img: plusTwo, backgroundColor: 'green' },
  { id: 'minusTwo', title: '-2', img: minusTwo, backgroundColor: 'red' },
  { id: 'double', title: 'x2', img: doubleDamage, backgroundColor: 'purple' },
  { id: 'miss', title: 'X', img: miss, backgroundColor: 'yellow' },
];
