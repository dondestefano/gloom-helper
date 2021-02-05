const plusZero = require('../assets/plusZero.png');
const plusOne = require('../assets/plusOne.png');
const plusTwo = require('../assets/plusTwo.png');
const minusOne = require('../assets/minusOne.png');
const minusTwo = require('../assets/minusTwo.png');
const miss = require('../assets/miss.png');
const doubleDamage = require('../assets/double.png');

//Gloomhavens default combat deck.

const defaultColor = '#708090';
const positiveColor = '#99cc33';
const negativeColor = '#cc3300';
const missColor = '#e7b416';
const bonusColor = '#730073';

export const DefaultDeck = [
  { id: 'plusOne1', title: '+1', img: plusOne, backgroundColor: positiveColor },
  { id: 'plusOne2', title: '+1', img: plusOne, backgroundColor: positiveColor },
  { id: 'plusOne3', title: '+1', img: plusOne, backgroundColor: positiveColor },
  { id: 'plusOne4', title: '+1', img: plusOne, backgroundColor: positiveColor },
  { id: 'plusOne5', title: '+1', img: plusOne, backgroundColor: positiveColor },
  {
    id: 'plusZero1',
    title: '+0',
    img: plusZero,
    backgroundColor: defaultColor,
  },
  {
    id: 'plusZero2',
    title: '+0',
    img: plusZero,
    backgroundColor: defaultColor,
  },
  {
    id: 'plusZero3',
    title: '+0',
    img: plusZero,
    backgroundColor: defaultColor,
  },
  {
    id: 'plusZero4',
    title: '+0',
    img: plusZero,
    backgroundColor: defaultColor,
  },
  {
    id: 'plusZero5',
    title: '+0',
    img: plusZero,
    backgroundColor: defaultColor,
  },
  {
    id: 'plusZero6',
    title: '+0',
    img: plusZero,
    backgroundColor: defaultColor,
  },
  {
    id: 'minusOne1',
    title: '-1',
    img: minusOne,
    backgroundColor: negativeColor,
  },
  {
    id: 'minusOne2',
    title: '-1',
    img: minusOne,
    backgroundColor: negativeColor,
  },
  {
    id: 'minusOne3',
    title: '-1',
    img: minusOne,
    backgroundColor: negativeColor,
  },
  {
    id: 'minusOne4',
    title: '-1',
    img: minusOne,
    backgroundColor: negativeColor,
  },
  {
    id: 'minusOne5',
    title: '-1',
    img: minusOne,
    backgroundColor: negativeColor,
  },
  { id: 'plusTwo', title: '+2', img: plusTwo, backgroundColor: positiveColor },
  {
    id: 'minusTwo',
    title: '-2',
    img: minusTwo,
    backgroundColor: negativeColor,
  },
  { id: 'double', title: 'x2', img: doubleDamage, backgroundColor: bonusColor },
  { id: 'miss', title: 'X', img: miss, backgroundColor: missColor },
];
