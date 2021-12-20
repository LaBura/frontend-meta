import waterCanIcon from "../assets/cursors/WateringCursor.png";
import pesticidesIcon from "../assets/cursors/PesticidesCursor.png";
import handIcon from "../assets/cursors/handCursor.png";
import shovelIcon from "../assets/cursors/shovelCursor.png";
import cornIcon from "../assets/cursors/cornIcon.png";
import coffeeIcon from "../assets/cursors/coffeeIcon.png";
import riceIcon from "../assets/cursors/riceIcon.png";
import mangoIcon from "../assets/cursors/mangoIcon.png";
import litchiIcon from "../assets/cursors/litchiIcon.png";
import pointerIcon from "../assets/cursors/pointerCursor.png";
import cursorIcon from "../assets/cursors/defaultCursor.png";
import notAllowedIcon from "../assets/cursors/notAllowedCursor.png";

export const CURSORS = {
  default: {
    src: `url(${cursorIcon}),auto`,
    img: cursorIcon,
  },
  water: {
    src: `url(${waterCanIcon}),auto`,
    img: waterCanIcon,
  },
  spray: {
    src: `url(${pesticidesIcon}),auto`,
    img: pesticidesIcon,
  },
  harvest: {
    src: `url(${handIcon}),auto`,
    img: handIcon,
  },
  notAllowed: {
    src: `url(${notAllowedIcon}),auto`,
    img: notAllowedIcon,
  },
  plant: {
    src: `url(${shovelIcon}),auto`,
    img: shovelIcon,
  },
  MANGO: {
    src: `url(${mangoIcon}),auto`,
    img: mangoIcon,
  },
  RICE: {
    src: `url(${riceIcon}),auto`,
    img: riceIcon,
  },
  LITCHI: {
    src: `url(${litchiIcon}),auto`,
    img: litchiIcon,
  },
  CORN: {
    src: `url(${cornIcon}),auto`,
    img: cornIcon,
  },
  COFFEE: {
    src: `url(${coffeeIcon}),auto`,
    img: coffeeIcon,
  },
  pointer: {
    src: `url(${pointerIcon}),auto`,
    img: pointerIcon,
  },
  shovel: {
    src: `url(${shovelIcon}),auto`,
    img: shovelIcon,
  },
};
