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

//Perks for Hatchet character.

const defaultColor = '#708090';
const positiveColor = '#99cc33';
const negativeColor = '#cc3300';
const muddleColor = '#B88546';
const poisonColor = '#8DB287';
const immobilizeColor = '#f37735';
const stunColor = '#0e1a40';
const woundColor = '#740001';
const pushColor = '#536872';

export const CharacterHatchetPerks = [
  // Perk 1
  {
    id: 'perkOne',
    perkRule: 'Remove two -1 cards',
    addCards: [],
    removeCards: [
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
    ],
  },

  // Perk 2
  {
    id: 'perkTwo',
    perkRule: 'Remove two -1 cards',
    addCards: [],
    removeCards: [
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
        backgroundColor: muddleColor,
      },
    ],
    removeCards: [
      {
        id: 'plusZero1',
        title: '+0',
        img: plusZero,
        backgroundColor: defaultColor,
      },
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
        backgroundColor: poisonColor,
      },
    ],
    removeCards: [
      {
        id: 'plusZero2',
        title: '+0',
        img: plusZero,
        backgroundColor: defaultColor,
      },
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
        backgroundColor: woundColor,
      },
    ],
    removeCards: [
      {
        id: 'plusZero3',
        title: '+0',
        img: plusZero,
        backgroundColor: defaultColor,
      },
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
        backgroundColor: immobilizeColor,
      },
    ],
    removeCards: [
      {
        id: 'plusZero4',
        title: '+0',
        img: plusZero,
        backgroundColor: defaultColor,
      },
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
        backgroundColor: pushColor,
      },
    ],
    removeCards: [
      {
        id: 'plusZero5',
        title: '+0',
        img: plusZero,
        backgroundColor: defaultColor,
      },
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
        backgroundColor: stunColor,
      },
    ],
    removeCards: [
      {
        id: 'plusZero6',
        title: '+0',
        img: plusZero,
        backgroundColor: defaultColor,
      },
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
        backgroundColor: stunColor,
      },
    ],
    removeCards: [
      {
        id: 'plusOne1',
        title: '+1',
        img: plusOne,
        backgroundColor: positiveColor,
      },
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
        backgroundColor: positiveColor,
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
        backgroundColor: positiveColor,
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
        backgroundColor: positiveColor,
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
        backgroundColor: positiveColor,
      },
    ],
    removeCards: [
      {
        id: 'plusOne2',
        title: '+1',
        img: plusOne,
        backgroundColor: positiveColor,
      },
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
        backgroundColor: positiveColor,
      },
    ],
    removeCards: [
      {
        id: 'plusOne3',
        title: '+1',
        img: plusOne,
        backgroundColor: positiveColor,
      },
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
        backgroundColor: positiveColor,
      },
    ],
    removeCards: [
      {
        id: 'plusOne4',
        title: '+1',
        img: plusOne,
        backgroundColor: positiveColor,
      },
    ],
  },
];
