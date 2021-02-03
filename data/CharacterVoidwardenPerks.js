const plusZero = require("../assets/plusZero.png")
const PlusZeroHealOne = require("../assets/plusZeroHealOne.png")
const minusOne = require("../assets/minusOne.png")
const minusTwo = require("../assets/minusTwo.png")
const plusOneDarkness = require("../assets/plusOneDarkness.png")
const plusOneIce = require("../assets/plusOneIce.png")
const PlusOneHealOne = require("../assets/plusOneHealOne.png")
const plusOneCurse = require("../assets/plusOneCurse.png")
const plusOnePoison = require("../assets/plusOnePoison.png")
const plusThree = require("../assets/plusThree.png")

export const CharacterVoidwardenPerks =
        [   // Perk 1
            {id: "perkOne",
            perkRule: "Remove two -1 cards", 
            addCards:[], 
            removeCards: [
                { id: "minusOne1", title: "-1", img: minusOne, backgroundColor: "red" }, 
                { id: "minusOne2", title: "-1", img: minusOne, backgroundColor: "red" }
            ]
            },

            // Perk 2      
            {id: "perkTwo",
            perkRule: "Remove one -2 card", 
            addCards:[], 
            removeCards: [
                { id: "minusTwo", title: "-2", img: minusTwo, backgroundColor: "red" }
            ]
            },

            // Perk 3
            {id: "perkThree",
            perkRule: "Replace one +0 card with one +1 Darkness card", 
            addCards:[
                { id: "PlusOneDarkness1", title: "+1 Darkness", img: plusOneDarkness, backgroundColor: "green" }
            ], 
            removeCards: [
                { id: "plusZero1", title: "+0", img: plusZero, backgroundColor: "grey"}
            ]
            },

            // Perk 4
            {id: "perkFour",
            perkRule: "Replace one +0 card with one +1 Darkness card", 
            addCards:[
                { id: "PlusOneDarkness2", title: "+1 Darkness", img: plusOneDarkness, backgroundColor: "green" }
            ], 
            removeCards: [
                { id: "plusZero2", title: "+0", img: plusZero, backgroundColor: "grey"}
            ]
            },

            // Perk 5
            {id: "perkFive",
            perkRule: "Replace one +0 card with one +1 Ice card", 
            addCards:[
                { id: "PlusOneIce1", title: "+1 Ice", img: plusOneIce, backgroundColor: "green" }
            ], 
            removeCards: [
                { id: "plusZero3", title: "+0", img: plusZero, backgroundColor: "grey"}
            ]
            },

            // Perk 6
            {id: "perkSix",
            perkRule: "Replace one +0 card with one +1 Ice card", 
            addCards:[
                { id: "PlusOneIce2", title: "+1 Ice", img: plusOneIce, backgroundColor: "green" }
            ], 
            removeCards: [
                { id: "plusZero4", title: "+0", img: plusZero, backgroundColor: "grey"}
            ]
            },

            // Perk 7
            {id: "perkSeven",
            perkRule: "Replace one -1 card with one +0 Heal 1 (Ally) card", 
            addCards:[
                { id: "PlusZeroHealOne1", title: "+0 Heal 1", img: PlusZeroHealOne, backgroundColor: "#ff9189"}
            ], 
            removeCards: [
                { id: "minusOne3", title: "-1", img: minusOne, backgroundColor: "red" }
            ]
            },

            // Perk 8
            {id: "perkEight",
            perkRule: "Replace one -1 card with one +0 Heal 1 (Ally) card", 
            addCards:[
                { id: "PlusZeroHealOne2", title: "+0 Heal 1", img: PlusZeroHealOne, backgroundColor: "#ff9189"}
            ], 
            removeCards: [
                { id: "minusOne4", title: "-1", img: minusOne, backgroundColor: "red" }
            ]
            },

            // Perk 9
            {id: "perkNine",
            perkRule: "Add one +1 Heal 1 (Ally) card", 
            addCards:[
                { id: "PlusOneHealOne1", title: "+1 Heal 1", img: PlusOneHealOne, backgroundColor: "#ff9189"}
            ], 
            removeCards: []
            },

            // Perk 10
            {id: "perkTen",
            perkRule: "Add one +1 Heal 1 (Ally) card", 
            addCards:[
                { id: "PlusOneHealOne2", title: "+1 Heal 1", img: PlusOneHealOne, backgroundColor: "#ff9189"}
            ], 
            removeCards: []
            },

            // Perk 11
            {id: "perkEleven",
            perkRule: "Add one +1 Heal 1 (Ally) card", 
            addCards:[
                { id: "PlusOneHealOne3", title: "+1 Heal 1", img: PlusOneHealOne, backgroundColor: "#ff9189"}
            ], 
            removeCards: []
            },

            // Perk 12
            {id: "perkTwelve",
            perkRule: "Add one +1 Poison card", 
            addCards:[
                { id: "PlusOnePoison1", title: "+1 Poison", img: plusOnePoison, backgroundColor: "#8DB287"}
            ], 
            removeCards: []
            },

            // Perk 13
            {id: "perkThirteen",
            perkRule: "Add one +3 card", 
            addCards:[
                { id: "PlusThree1", title: "+3", img: plusThree, backgroundColor: "green"}
            ], 
            removeCards: []
            },

            // Perk 14
            {id: "perkFourteen",
            perkRule: "Add one +1 Curse card", 
            addCards:[
                { id: "PlusOneCurse1", title: "+1 Curse", img: plusOneCurse, backgroundColor: "#29544B"}
            ], 
            removeCards: []
            },

            // Perk 15
            {id: "perkFifteen",
            perkRule: "Add one +1 Curse card", 
            addCards:[
                { id: "PlusOneCurse2", title: "+1 Curse", img: plusOneCurse, backgroundColor: "#29544B"}
            ], 
            removeCards: []
            },
        ]