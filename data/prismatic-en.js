
/* ======================================
   POKÉMON TCG - PRISMATIC EVOLUTIONS
   CATÁLOGO EN INGLÉS
====================================== */

// Nombres de las primeras 10 cartas


const prismaticEnglishNames = [
  // 001–010
  "Exeggcute",
  "Exeggutor",
  "Pinsir",
  "Budew",
  "Leafeon",
  "Leafeon ex",
  "Cottonee",
  "Whimsicott",
  "Applin",
  "Dipplin",

  // 011–020
  "Hydrapple ex",
  "Teal Mask Ogerpon ex",
  "Flareon",
  "Flareon ex",
  "Litleo",
  "Pyroar",
  "Hearthflame Mask Ogerpon ex",
  "Slowpoke",
  "Slowking",
  "Goldeen",

  // 021–030
  "Seaking",
  "Vaporeon",
  "Vaporeon ex",
  "Suicune",
  "Glaceon",
  "Glaceon ex",
  "Wellspring Mask Ogerpon ex",
  "Pikachu ex",
  "Jolteon",
  "Jolteon ex",

  // 031–040
  "Iron Hands ex",
  "Iron Thorns ex",
  "Espeon",
  "Espeon ex",
  "Duskull",
  "Dusclops",
  "Dusknoir",
  "Spritzee",
  "Aromatisse",
  "Sylveon",

  // 041–050
  "Sylveon ex",
  "Scream Tail",
  "Flutter Mane",
  "Munkidori",
  "Fezandipiti",
  "Iron Boulder",
  "Larvitar",
  "Pupitar",
  "Groudon",
  "Riolu",

  // 051–060
  "Lucario ex",
  "Hippopotas",
  "Hippowdon",
  "Bloodmoon Ursaluna",
  "Great Tusk",
  "Sandy Shocks ex",
  "Okidogi",
  "Cornerstone Mask Ogerpon ex",
  "Umbreon",
  "Umbreon ex",

  // 061–070
  "Sneasel",
  "Houndour",
  "Houndoom",
  "Tyranitar ex",
  "Roaring Moon",
  "Bronzor",
  "Bronzong",
  "Heatran",
  "Duraludon",
  "Archaludon",

  // 071–080
  "Dreepy",
  "Drakloak",
  "Dragapult ex",
  "Eevee",
  "Eevee ex",
  "Snorlax ex",
  "Hoothoot",
  "Noctowl",
  "Dunsparce",
  "Dudunsparce",

  // 081–090
  "Miltank",
  "Lugia ex",
  "Buneary",
  "Lopunny",
  "Fan Rotom",
  "Regigigas",
  "Shaymin",
  "Furfrou",
  "Hawlucha",
  "Noibat",

  // 091–100
  "Noivern ex",
  "Terapagos ex",
  "Amarys",
  "Area Zero Underdepths",
  "Binding Mochi",
  "Black Belt's Training",
  "Black Belt's Training",
  "Black Belt's Training",
  "Black Belt's Training",
  "Briar",

  // 101–110
  "Buddy-Buddy Poffin",
  "Bug Catching Set",
  "Carmine",
  "Ciphermaniac's Codebreaking",
  "Crispin",
  "Earthen Vessel",
  "Explorer's Guidance",
  "Festival Grounds",
  "Friends in Paldea",
  "Glass Trumpet",

  // 111–120
  "Haban Berry",
  "Janine's Secret Art",
  "Kieran",
  "Lacey",
  "Larry's Skill",
  "Max Rod",
  "Maximum Belt",
  "Ogre's Mask",
  "Prime Catcher",
  "Professor Sada's Vitality",

  // 121–130
  "Professor Turo's Scenario",
  "Professor's Research",
  "Professor's Research",
  "Professor's Research",
  "Professor's Research",
  "Rescue Board",
  "Roto-Stick",
  "Scoop Up Cyclone",
  "Sparkling Crystal",
  "Techno Radar",

  // 131–140
  "Treasure Tracker",
  "Amarys",
  "Atticus",
  "Atticus",
  "Brassius",
  "Eri",
  "Friends in Paldea",
  "Giacomo",
  "Larry's Skill",
  "Mela",

  // 141–150
  "Ortega",
  "Raifort",
  "Tyme",
  "Leafeon ex",
  "Teal Mask Ogerpon ex",
  "Flareon ex",
  "Ceruledge ex",
  "Hearthflame Mask Ogerpon ex",
  "Vaporeon ex",
  "Glaceon ex",

  // 151–160
  "Palafin ex",
  "Wellspring Mask Ogerpon ex",
  "Jolteon ex",
  "Iron Hands ex",
  "Espeon ex",
  "Sylveon ex",
  "Iron Valiant ex",
  "Iron Crown ex",
  "Sandy Shocks ex",
  "Cornerstone Mask Ogerpon ex",

  // 161–170
  "Umbreon ex",
  "Roaring Moon ex",
  "Pecharunt ex",
  "Gholdengo ex",
  "Dragapult ex",
  "Raging Bolt ex",
  "Eevee ex",
  "Bloodmoon Ursaluna ex",
  "Terapagos ex",
  "Amarys",

  // 171–180
  "Crispin",
  "Drayton",
  "Janine's Secret Art",
  "Kieran",
  "Lacey",
  "Iron Leaves ex",
  "Teal Mask Ogerpon ex",
  "Walking Wake ex",
  "Pikachu ex",
  "Terapagos ex"
];


/* =========================================
   CLASIFICACIÓN DE CARTAS POR RAREZA
   PRISMATIC EVOLUTIONS - INGLÉS
========================================= */



const prismaticCardRarities = {

    // Pokémon ex convencionales
    ex: [
        6, 11, 12, 14, 17,
        23, 26, 27, 28, 30,
        31, 32, 34, 41, 51,
        56, 58, 60, 64, 73,
        75, 76, 82, 91, 92
    ],

    // Illustration Rare
    illustration: [],

ultraRare: [
    132, 133, 134, 135, 136, 137,
    138, 139, 140, 141, 142, 143
],
    // Special Illustration Rare
    specialIllustration: [
        
        132, 133, 134, 135, 136, 137,
        138, 139, 140, 141, 142,
        144, 145, 146, 147, 148,
        149, 150, 151, 152, 153,
        154, 155, 156, 157, 158,
        159, 160, 161, 162, 163,
        164, 165, 166, 167, 168,
        169, 170, 171, 172, 173,
        174, 175
    ],

    // Hyper Rare
    gold: [176, 177, 178, 179, 180]
};



function getPrismaticRarity(cardNumber) {

    if (prismaticCardRarities.gold.includes(cardNumber)) {
        return "gold";
    }

    if (prismaticCardRarities.specialIllustration.includes(cardNumber)) {
        return "specialIllustration";
    }

    if (prismaticCardRarities.illustration.includes(cardNumber)) {
        return "illustration";
    }
if (prismaticCardRarities.ultraRare.includes(cardNumber)) {
    return "ultraRare";
}
    if (prismaticCardRarities.ex.includes(cardNumber)) {
        return "ex";
    }

    return "normal";
}

 // Crear automáticamente el catálogo de 180 cartas
const prismaticEnglishCards = Array.from(
  { length: 180 },
  (_, index) => {
    const cardNumber = index + 1;
const rarity = getPrismaticRarity(cardNumber);
    return {
      number: String(cardNumber).padStart(3, "0"),

      

name:
    cardNumber === 161
        ? "Umbreon ex"
        : cardNumber === 180
            ? "Terapagos ex"
            : (
                prismaticEnglishNames[index] ||
                `Carta ${String(cardNumber).padStart(3, "0")}`
            ),



      image: `assets/cards/prismatic-evolutions/SV8pt5_EN_${cardNumber}.png`,

      

/* EFECTOS SEGÚN LA CATEGORÍA */


rarityEffect: rarity,

holo: rarity !== "normal",

holoType: rarity === "gold" ? "gold" : "none"

    };
  }
);

