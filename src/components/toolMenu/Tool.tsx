import React, { useState } from "react";
import Inventory from "../inventory/Inventory";
import Pesticides from "../Pesticides";
import Shop from "../shop/Shop";
import Water from "../Water";
import inventoryIcon from "../../assets/inventory.png";
import waterCanIcon from "../../assets/water.png";
import pesticidesIcon from "../../assets/pesticides.png";
import shopIcon from "../../assets/shop.png";
import handIcon from "../../assets/hand.png";
import shovelIcon from "../../assets/shovel.png";
import { RootState } from "../../redux/reducers";
import { useDispatch, useSelector } from "react-redux";
import { changeCursor } from "../../redux/actions";
import { CURSORS } from "../../data/cursors";
import "./styles.scss";
interface ToolProps {
  name: string;
}
export default function Tool(props: ToolProps) {
  const [open, setOpen] = useState(false);
  const [tool, setTool] = useState(shopIcon);
  const { name } = props;
  const pesticides = useSelector((state: RootState) => state.pesticides);
  const water = useSelector((state: RootState) => state.water);
  const dispatch = useDispatch();

  React.useEffect(() => {
    switch (name) {
      case "Shop":
        setTool(shopIcon);
        break;

      case "Inventory":
        setTool(inventoryIcon);
        break;

      case "WateringCan":
        setTool(waterCanIcon);
        break;

      case "Pesticides":
        setTool(pesticidesIcon);
        break;

      case "Hand":
        setTool(handIcon);
        break;
      case "Shovel":
        setTool(shovelIcon);
        break;
      default:
        break;
    }
  }, [name]);

  const renderWaterAmount = () => {
    return <div className="amountIcon">{water}</div>;
  };

  const renderPesticidesAmount = () => {
    return <div className="amountIcon">{pesticides}</div>;
  };

  const renderItem = () => {
    switch (name) {
      case "Shop":
        return <Shop close={() => setOpen(false)} open={open} />;
      case "Inventory":
        return <Inventory close={() => setOpen(false)} open={open} />;
      case "WateringCan":
        return (
          <>
            {renderWaterAmount()} <Water />
          </>
        );

      case "Pesticides":
        return (
          <>
            {renderPesticidesAmount()} <Pesticides />
          </>
        );

      case "hand":
        break;
      default:
        break;
    }
  };

  const onUse = () => {
    if (name === "Inventory" || name === "Shop") {
      setOpen((open) => !open);
    } else if (name === "Pesticides") {
      dispatch(changeCursor({ name: "spray", cursor: CURSORS.spray.src }));
    } else if (name === "WateringCan") {
      dispatch(changeCursor({ name: "water", cursor: CURSORS.water.src }));
    } else if (name === "Hand") {
      dispatch(changeCursor({ name: "harvest", cursor: CURSORS.harvest.src }));
    } else if (name === "Shovel") {
      dispatch(changeCursor({ name: "shovel", cursor: CURSORS.shovel.src }));
    }
  };

  return (
    <div className="containerTool">
      <img
        src={tool}
        alt=""
        style={{
          cursor: CURSORS.pointer.src,
        }}
        className="tooIcon"
        onClick={(e) => {
          onUse();
          e.stopPropagation();
        }}
      />

      {renderItem()}
      <div className="toolName">{name}</div>
    </div>
  );
}
