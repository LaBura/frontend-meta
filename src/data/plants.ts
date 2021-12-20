import corn from "../assets/cornPlant.png";
import seedCorn from "../assets/seedCorn.png";
import coffee from "../assets/coffeePlant.png";
import seedCoffee from "../assets/seedCoffee.png";
import litchi from "../assets/litchiPlant.png";
import seedLitchi from "../assets/seedLitchi.png";
import rice from "../assets/ricePlant.png";
import seedRice from "../assets/seedRice.png";
import mango from "../assets/mangoPlant.png";
import seedMango from "../assets/seedMango.png";
import drinkEnoughIcon from "../assets/geneIcon/drinkEnough.png";
import friendlyWormsIcon from "../assets/geneIcon/friendlyWorms.png";
import tickTockIcon from "../assets/geneIcon/tickTock.png";
import tickTockGoldIcon from "../assets/geneIcon/tickTockGold.png";
import iHarvestIcon from "../assets/geneIcon/iHarvest.png";
import iSprayIcon from "../assets/geneIcon/iSpray.png";
import iWaterIcon from "../assets/geneIcon/iWater.png";
import luckyDayIcon from "../assets/geneIcon/luckyDay.png";
import luckyDayGoldIcon from "../assets/geneIcon/luckyDayGold.png";
import theHappyFaceIcon from "../assets/geneIcon/theHappyFace.png";

export const PLANT_STATES = {
  NO_PLANT: {
    name: "No Plant",
    color: "#b5651e",
  },
  PLANT_LVL0: {
    name: "No Plant",
    color: "#4d3723",
  },
  PLANT_LVL1: {
    name: "No Plant",
    color: "#703c0c",
  },

  PLANT_LVL2: {
    name: "No Plant",
    color: "#132e09",
  },
  PLANT_LVL3: {
    name: "No Plant",
    color: "#5d541d",
  },
  PLANT_LVL0_WORM: {
    name: "No Plant",
    color: "#c9a447",
  },
  PLANT_LVL1_WORM: {
    name: "No Plant",
    color: "#a47a37",
  },
  PLANT_LVL2_WORM: {
    name: "No Plant",
    color: "#887171",
  },
};

export const PLANT_TYPE = {
  CORN: {
    timeHarvest: 24,
    profit: 40,
    exp: 10,
    rarity: "normal",
    rateAppear: 60,
    gens: 2,
    price: 1000,
    src: corn,
    stars: 1,
    seed4: seedCorn,
  },
  COFFEE: {
    timeHarvest: 24,
    profit: 50,
    exp: 15,
    rarity: "normal",
    rateAppear: 30,
    gens: 2,
    price: 1000,
    src: coffee,
    stars: 2,
    seed4: seedCoffee,
  },
  LITCHI: {
    timeHarvest: 24,
    profit: 65,
    exp: 20,
    rarity: "normal",
    rateAppear: 10,
    gens: 2,
    price: 1000,
    src: litchi,
    stars: 3,
    seed4: seedLitchi,
  },
  RICE: {
    timeHarvest: 24,
    profit: 200,
    exp: 30,
    rarity: "rare",
    rateAppear: 90,
    gens: 2,
    price: 3000,
    src: rice,
    stars: 4,
    seed4: seedRice,
  },
  MANGO: {
    timeHarvest: 24,
    profit: 375,
    exp: 50,
    rarity: "rare",
    rateAppear: 10,
    gens: 3,
    price: 3000,
    src: mango,
    stars: 5,
    seed4: seedMango,
  },
};

export const GENE = {
  DE: {
    name: "Drink Enough",
    description: "No need to watering",
    rate: 5,
    src: drinkEnoughIcon,
  },
  FE: {
    name: "Friendly Worms",
    description: "No need to spraying worm",
    rate: 5,
    src: friendlyWormsIcon,
  },
  TT: {
    name: "Tick tock",
    description: "Reduction 1 hour in harvest",
    rate: 5,
    src: tickTockIcon,
  },
  TTG: {
    name: "Tick tock gold",
    description: "Reduction 2 hours in harvest",
    rate: 5,
    src: tickTockGoldIcon,
  },
  IH: {
    name: "iHarvest",
    description: "Automatic harvest daily",
    rate: 10,
    src: iHarvestIcon,
  },
  IS: {
    name: "iSpray",
    description: "Automatic spray worm",
    rate: 10,
    src: iSprayIcon,
  },
  IW: {
    name: "iWater",
    description: "Automatic watering",
    rate: 10,
    src: iWaterIcon,
  },
  LD: {
    name: "Lucky Day",
    description: "Have 1% get normal box when harvest",
    rate: 5,
    src: luckyDayIcon,
  },
  LDG: {
    name: "Lucky Day gold",
    description: "Have 2% get normal box when harvest",
    rate: 5,
    src: luckyDayGoldIcon,
  },
  THF: {
    name: "The Happy Face",
    description: "Let's smile even you have nothing",
    rate: 40,
    src: theHappyFaceIcon,
  },
};
