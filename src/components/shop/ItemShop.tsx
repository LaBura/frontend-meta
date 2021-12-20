import waterIcon from "../../assets/water.png";
import boxIcon from "../../assets/box.png";
import pesticidesIcon from "../../assets/pesticides.png";
import React, { useState } from "react";
import { CURSORS } from "../../data/cursors";

interface ItemShopProps {
  onClick: Function;
  name: string;
}
export default function ItemShop(props: ItemShopProps) {
  const { onClick, name } = props;
  const [item, setItem] = useState(boxIcon);
  React.useEffect(() => {
    switch (name) {
      case "SeedsBox":
        setItem(boxIcon);
        break;

      case "Water":
        setItem(waterIcon);
        break;

      case "Pesticides":
        setItem(pesticidesIcon);
        break;

      default:
        break;
    }
  }, [name]);
  return (
    <div
      style={{
        display: "inline-block",
        backgroundColor: "rgba(255,255,255,0.4)",
        margin: 20,
        borderRadius: 25,
        cursor: CURSORS.pointer.src,
      }}
      onClick={(e) => {
        e.stopPropagation();

        onClick();
      }}
    >
      <img
        src={item}
        alt=""
        style={{
          width: 100,
          height: 100,
          margin: "25px 25px",
        }}
      />
      <p
        style={{
          color: "white",
          fontSize: 18,
        }}
      >
        {name}
      </p>
    </div>
  );
}
