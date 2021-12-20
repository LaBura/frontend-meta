import { useDispatch } from "react-redux";
import { CURSORS } from "../../data/cursors";
import { changeCursor, changeLandPlant } from "../../redux/actions";
import Button from "../simpleComponents/button/Button";
import ItemBought from "../shop/ItemBought";
import "./styles.scss";
interface ItemInventoryProps {
  plant: any;
  onClick: Function;
}
export default function ItemInventory(props: ItemInventoryProps) {
  const { onClick, plant } = props;
  const dispatch = useDispatch();

  return (
    <div className="itemBought">
      <ItemBought plant={plant} />
      <div className="itemBoughtBtn">
        <Button
          label="PLANT"
          onClick={() => {
            dispatch(
              changeCursor({
                name: "plant",
                // @ts-ignore
                cursor: CURSORS[plant.plant.name].src,
              })
            );
            dispatch(changeLandPlant(plant._id));
            onClick();
          }}
          loading={false}
        />
      </div>
    </div>
  );
}
