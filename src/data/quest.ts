import pesticidesIcon from "../assets/pesticides.png";
import waterIcon from "../assets/water.png";

export const QuestData = {
  WQ: {
    _id: "WQ",
    name: "Water Quest",
    description: "Water Friends Lands",
    required: 10,
    icon: waterIcon,
  },
  PQ: {
    _id: "PQ",
    name: "Pesticides Quest",
    description: "Spray Friends Lands",
    required: 5,
    icon: pesticidesIcon,
  },
};
export const QuestPrize = {
  exp: 100,
  money: 35,
};
