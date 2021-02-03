const plusZero = require('../assets/plusZero.png');
const plusZeroStun = require('../assets/plusZeroStun.png');
const plusOne = require('../assets/plusOne.png');
const plusTwoMuddle = require('../assets/plusTwoMuddle.png');
const plusTwoWind = require('../assets/plusTwoWind.png');
const minusOne = require('../assets/minusOne.png');
const plusOnePoison = require('../assets/plusOnePoison.png');
const plusOneWound = require('../assets/plusOneWound.png');
const plusOneImmobilize = require('../assets/plusOneImmobilize.png');
const plusOneStun = require('../assets/plusOneStun.png');
const plusOnePushTwo = require('../assets/plusOnePushTwo.png');
const plusThree = require('../assets/plusThree.png');

export const CharacterHatchetPerks = [
  // Perk 1
  {
    id: 'perkOne',
    perkRule: 'Remove two -1 cards',
    addCards: [],
    removeCards: [
      { id: 'minusOne1', title: '-1', img: minusOne, backgroundColor: 'red' },
      { id: 'minusOne2', title: '-1', img: minusOne, backgroundColor: 'red' },
    ],
  },

  // Perk 2
  {
    id: 'perkTwo',
    perkRule: 'Remove two -1 cards',
    addCards: [],
    removeCards: [
      { id: 'minusOne3', title: '-1', img: minusOne, backgroundColor: 'red' },
      { id: 'minusOne4', title: '-1', img: minusOne, backgroundColor: 'red' },
    ],
  },

  // Perk 3
  {
    id: 'perkThree',
    perkRule: 'Replace one +0 card with one +2 Muddle card',
    addCards: [
      {
        id: 'PlusTwoMuddle1',
        title: '+2 Muddle',
        img: plusTwoMuddle,
        backgroundColor: '#B88546',
      },
    ],
    removeCards: [
      { id: 'plusZero1', title: '+0', img: plusZero, backgroundColor: 'grey' },
    ],
  },

  // Perk 4
  {
    id: 'perkFour',
    perkRule: 'Replace one +0 card with one +1 Poison card',
    addCards: [
      {
        id: 'PlusOnePoison1',
        title: '+1 Poison',
        img: plusOnePoison,
        backgroundColor: '#8DB287',
      },
    ],
    removeCards: [
      { id: 'plusZero2', title: '+0', img: plusZero, backgroundColor: 'grey' },
    ],
  },

  // Perk 5
  {
    id: 'perkFive',
    perkRule: 'Replace one +0 card with one +1 Wound card',
    addCards: [
      {
        id: 'PlusOneWound1',
        title: '+1 Wound',
        img: plusOneWound,
        backgroundColor: '#740001',
      },
    ],
    removeCards: [
      { id: 'plusZero3', title: '+0', img: plusZero, backgroundColor: 'grey' },
    ],
  },

  // Perk 6
  {
    id: 'perkSix',
    perkRule: 'Replace one +0 card with one +1 Immobilize card',
    addCards: [
      {
        id: 'PlusOneImmobilize1',
        title: '+1 Immobilize',
        img: plusOneImmobilize,
        backgroundColor: '#f37735',
      },
    ],
    removeCards: [
      { id: 'plusZero4', title: '+0', img: plusZero, backgroundColor: 'grey' },
    ],
  },

  // Perk 7
  {
    id: 'perkSeven',
    perkRule: 'Replace one +0 card with one +1 Push 2 card',
    addCards: [
      {
        id: 'PlusOnePushTwo1',
        title: '+1 Push 2',
        img: plusOnePushTwo,
        backgroundColor: '#536872',
      },
    ],
    removeCards: [
      { id: 'plusZero5', title: '+0', img: plusZero, backgroundColor: 'grey' },
    ],
  },

  // Perk 8
  {
    id: 'perkEight',
    perkRule: 'Replace one +0 card with one +0 Stun card',
    addCards: [
      {
        id: 'PlusZeroStun1',
        title: '+0 Stun',
        img: plusZeroStun,
        backgroundColor: '#0e1a40',
      },
    ],
    removeCards: [
      { id: 'plusZero6', title: '+0', img: plusZero, backgroundColor: 'grey' },
    ],
  },

  // Perk 9
  {
    id: 'perkNine',
    perkRule: 'Replace one +1 card with one +1 Stun card',
    addCards: [
      {
        id: 'PlusOneStun1',
        title: '+1 Stun',
        img: plusOneStun,
        backgroundColor: '#0e1a40',
      },
    ],
    removeCards: [
      { id: 'plusOne1', title: '+1', img: plusOne, backgroundColor: 'green' },
    ],
  },

  // Perk 10
  {
    id: 'perkTen',
    perkRule: 'Add one +2 Wind card',
    addCards: [
      {
        id: 'PlusTwoWind1',
        title: '+2 Wind',
        img: plusTwoWind,
        backgroundColor: 'green',
      },
    ],
    removeCards: [],
  },

  // Perk 11
  {
    id: 'perkEleven',
    perkRule: 'Add one +2 Wind card',
    addCards: [
      {
        id: 'PlusTwoWind2',
        title: '+2 Wind',
        img: plusTwoWind,
        backgroundColor: 'green',
      },
    ],
    removeCards: [],
  },

  // Perk 12
  {
    id: 'perkTwelve',
    perkRule: 'Add one +2 Wind card',
    addCards: [
      {
        id: 'PlusTwoWind3',
        title: '+2 Wind',
        img: plusTwoWind,
        backgroundColor: 'green',
      },
    ],
    removeCards: [],
  },

  // Perk 13
  {
    id: 'perkThirteen',
    perkRule: 'Replace one +1 card with one +3 card',
    addCards: [
      {
        id: 'PlusThree1',
        title: '+3',
        img: plusThree,
        backgroundColor: 'green',
      },
    ],
    removeCards: [
      { id: 'plusOne2', title: '+1', img: plusOne, backgroundColor: 'green' },
    ],
  },

  // Perk 14
  {
    id: 'perkFourteen',
    perkRule: 'Replace one +1 card with one +3 card',
    addCards: [
      {
        id: 'PlusThree2',
        title: '+3',
        img: plusThree,
        backgroundColor: 'green',
      },
    ],
    removeCards: [
      { id: 'plusOne3', title: '+1', img: plusOne, backgroundColor: 'green' },
    ],
  },

  // Perk 15
  {
    id: 'perkFifteen',
    perkRule: 'Replace one +1 card with one +3 card',
    addCards: [
      {
        id: 'PlusThree3',
        title: '+3',
        img: plusThree,
        backgroundColor: 'green',
      },
    ],
    removeCards: [
      { id: 'plusOne4', title: '+1', img: plusOne, backgroundColor: 'green' },
    ],
  },
];
