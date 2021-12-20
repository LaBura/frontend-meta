import React, { useState } from "react";
import HyperModal, { ModalStack, ModalStackProps } from "react-hyper-modal";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import Item from "./Item";
import backIcon from "../../assets/back.png";
import closeIcon from "../../assets/close.png";
import ItemInventory from "./ItemInventory";
import { CURSORS } from "../../data/cursors";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import "./styles.scss";
interface InventoryProps {
  open: boolean;
  close: Function;
}
export default function Inventory(props: InventoryProps) {
  const inventory = useSelector((state: RootState) => state.inventory);
  const [index, setIndex] = useState(0);
  const [plant, setPlant] = useState(null);
  const { open } = props;
  const close = () => {
    setIndex(0);
    props.close();
  };
  const click = (plant: any) => {
    setIndex(1);
    setPlant(plant);
  };
  const renderItems = () => {
    if (!inventory.plants) {
      return <></>;
    }
    return inventory.plants.map((plant: any, index: any) => (
      <Item key={index} plant={plant} onClick={() => click(plant)} />
    ));
  };
  return (
    <div
      style={{
        zIndex: 1,
      }}
    >
      <HyperModal
        stackable
        stackableIndex={index}
        afterClose={close}
        isOpen={open}
        renderCloseIcon={() => (
          <img
            style={{
              cursor: CURSORS.pointer.src,
            }}
            className="closeIconInventory"
            src={closeIcon}
            alt=""
          />
        )}
        classes={{
          contentClassName: "modal",
          dimmerClassName: "dimmer",
          closeIconClassName: "closeModal",
        }}
        closeOnDimmerClick={false}
      >
        {(props: ModalStackProps) => (
          <ModalStack {...props}>
            <SimpleBar className="simpleBarInventory">
              <div className="itemInventoryContainer">{renderItems()}</div>
            </SimpleBar>
            <div>
              <img
                style={{
                  cursor: CURSORS.pointer.src,
                }}
                className="backIconInventory"
                onClick={(e) => {
                  setIndex(0);
                  e.stopPropagation();
                }}
                src={backIcon}
                alt=""
              />
              <ItemInventory onClick={() => close()} plant={plant} />
            </div>
          </ModalStack>
        )}
      </HyperModal>
    </div>
  );
}
