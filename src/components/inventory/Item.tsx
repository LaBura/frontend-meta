import { useEffect, useState } from "react";
import { CURSORS } from "../../data/cursors";
import { PLANT_TYPE } from "../../data/plants";
import "./styles.scss";

interface ItemProps {
  onClick: Function;
  plant: any;
}
export default function Item(props: ItemProps) {
  const { onClick, plant } = props;
  const [plantImg, setplantImg] = useState();

  useEffect(() => {
    // @ts-ignore
    let plantimg = PLANT_TYPE[plant.plant.name];
    setplantImg(plantimg.src);
  }, [plant.plant.name]);
  return (
    <div
      onClick={(e) => {
        onClick();
        e.stopPropagation();
      }}
      style={{
        cursor: CURSORS.pointer.src,
      }}
      className="itemBoughtInventory"
    >
      <img className="itemImg" src={plantImg} alt="" />
      <p className="itemInventoryName">{plant.plant.name}</p>
    </div>
  );
}
