const plusZero = require('../assets/plusZero.png');
const PlusZeroHealOne = require('../assets/plusZeroHealOne.png');
const minusOne = require('../assets/minusOne.png');
const minusTwo = require('../assets/minusTwo.png');
const plusOneDarkness = require('../assets/plusOneDarkness.png');
const plusOneIce = require('../assets/plusOneIce.png');
const PlusOneHealOne = require('../assets/plusOneHealOne.png');
const plusOneCurse = require('../assets/plusOneCurse.png');
const plusOnePoison = require('../assets/plusOnePoison.png');
const plusThree = require('../assets/plusThree.png');

//Perks for Voidwarden character.

const defaultColor = '#708090';
const positiveColor = '#99cc33';
const negativeColor = '#cc3300';
const healColor = '#ff9189';
const curseColor = '#29544B';
const poisonColor = '#8DB287';

export const CharacterVoidwardenPerks = [
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
    perkRule: 'Remove one -2 card',
    addCards: [],
    removeCards: [
      {
        id: 'minusTwo',
        title: '-2',
        img: minusTwo,
        backgroundColor: negativeColor,
      },
    ],
  },

  // Perk 3
  {
    id: 'perkThree',
    perkRule: 'Replace one +0 card with one +1 Darkness card',
    addCards: [
      {
        id: 'PlusOneDarkness1',
        title: '+1 Darkness',
        img: plusOneDarkness,
        backgroundColor: positiveColor,
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
    perkRule: 'Replace one +0 card with one +1 Darkness card',
    addCards: [
      {
        id: 'PlusOneDarkness2',
        title: '+1 Darkness',
        img: plusOneDarkness,
        backgroundColor: positiveColor,
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
    perkRule: 'Replace one +0 card with one +1 Ice card',
    addCards: [
      {
        id: 'PlusOneIce1',
        title: '+1 Ice',
        img: plusOneIce,
        backgroundColor: positiveColor,
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
    perkRule: 'Replace one +0 card with one +1 Ice card',
    addCards: [
      {
        id: 'PlusOneIce2',
        title: '+1 Ice',
        img: plusOneIce,
        backgroundColor: positiveColor,
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
    perkRule: 'Replace one -1 card with one +0 Heal 1 (Ally) card',
    addCards: [
      {
        id: 'PlusZeroHealOne1',
        title: '+0 Heal 1',
        img: PlusZeroHealOne,
        backgroundColor: healColor,
      },
    ],
    removeCards: [
      {
        id: 'minusOne3',
        title: '-1',
        img: minusOne,
        backgroundColor: negativeColor,
      },
    ],
  },

  // Perk 8
  {
    id: 'perkEight',
    perkRule: 'Replace one -1 card with one +0 Heal 1 (Ally) card',
    addCards: [
      {
        id: 'PlusZeroHealOne2',
        title: '+0 Heal 1',
        img: PlusZeroHealOne,
        backgroundColor: healColor,
      },
    ],
    removeCards: [
      {
        id: 'minusOne4',
        title: '-1',
        img: minusOne,
        backgroundColor: negativeColor,
      },
    ],
  },

  // Perk 9
  {
    id: 'perkNine',
    perkRule: 'Add one +1 Heal 1 (Ally) card',
    addCards: [
      {
        id: 'PlusOneHealOne1',
        title: '+1 Heal 1',
        img: PlusOneHealOne,
        backgroundColor: healColor,
      },
    ],
    removeCards: [],
  },

  // Perk 10
  {
    id: 'perkTen',
    perkRule: 'Add one +1 Heal 1 (Ally) card',
    addCards: [
      {
        id: 'PlusOneHealOne2',
        title: '+1 Heal 1',
        img: PlusOneHealOne,
        backgroundColor: healColor,
      },
    ],
    removeCards: [],
  },

  // Perk 11
  {
    id: 'perkEleven',
    perkRule: 'Add one +1 Heal 1 (Ally) card',
    addCards: [
      {
        id: 'PlusOneHealOne3',
        title: '+1 Heal 1',
        img: PlusOneHealOne,
        backgroundColor: healColor,
      },
    ],
    removeCards: [],
  },

  // Perk 12
  {
    id: 'perkTwelve',
    perkRule: 'Add one +1 Poison card',
    addCards: [
      {
        id: 'PlusOnePoison1',
        title: '+1 Poison',
        img: plusOnePoison,
        backgroundColor: poisonColor,
      },
    ],
    removeCards: [],
  },

  // Perk 13
  {
    id: 'perkThirteen',
    perkRule: 'Add one +3 card',
    addCards: [
      {
        id: 'PlusThree1',
        title: '+3',
        img: plusThree,
        backgroundColor: positiveColor,
      },
    ],
    removeCards: [],
  },

  // Perk 14
  {
    id: 'perkFourteen',
    perkRule: 'Add one +1 Curse card',
    addCards: [
      {
        id: 'PlusOneCurse1',
        title: '+1 Curse',
        img: plusOneCurse,
        backgroundColor: curseColor,
      },
    ],
    removeCards: [],
  },

  // Perk 15
  {
    id: 'perkFifteen',
    perkRule: 'Add one +1 Curse card',
    addCards: [
      {
        id: 'PlusOneCurse2',
        title: '+1 Curse',
        img: plusOneCurse,
        backgroundColor: curseColor,
      },
    ],
    removeCards: [],
  },
];
