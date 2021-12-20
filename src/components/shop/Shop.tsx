import React, { useState } from "react";
import ItemShop from "./ItemShop";
import HyperModal, { ModalStack, ModalStackProps } from "react-hyper-modal";
import ItemPurchase from "./ItemPurchase";
import closeIcon from "../../assets/close.png";
import backIcon from "../../assets/back.png";
import ItemBought from "./ItemBought";
import { CURSORS } from "../../data/cursors";
import SimpleBar from "simplebar-react";
import "./styles.scss";
interface ShopProps {
  open: boolean;
  close: Function;
}
export default function Shop(props: ShopProps) {
  const [index, setIndex] = useState(0);
  const [route, setRoute] = useState("");
  const [plant, setPlant] = useState();
  const { open } = props;
  const close = () => {
    props.close();
    setIndex(0);
  };
  const click = (route: string) => {
    setIndex(1);
    setRoute(route);
  };
  const onFinish = (plant: any) => {
    setPlant(plant);
    setIndex(2);
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
            className="closeIconShop"
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
          <ModalStack {...props} handleClose={() => setIndex(0)}>
            <SimpleBar className="simpleBarShop">
              <div className="itemShopContainer">
                <ItemShop name="SeedsBox" onClick={() => click("SeedsBox")} />
                <ItemShop name="Water" onClick={() => click("Water")} />
                <ItemShop
                  name="Pesticides"
                  onClick={() => click("Pesticides")}
                />
              </div>
            </SimpleBar>
            <div>
              <img
                style={{
                  cursor: CURSORS.pointer.src,
                }}
                className="backIconShop"
                onClick={(e) => {
                  setIndex(0);
                  e.stopPropagation();
                }}
                src={backIcon}
                alt=""
              />
              <ItemPurchase
                onFinish={(plant: any) => {
                  onFinish(plant);
                }}
                route={route}
              />
            </div>
            <div>
              <img
                style={{
                  cursor: CURSORS.pointer.src,
                }}
                className="backIconShop"
                onClick={(e) => {
                  setIndex(1);
                  e.stopPropagation();
                }}
                src={backIcon}
                alt=""
              />
              <ItemBought plant={plant} />
            </div>
          </ModalStack>
        )}
      </HyperModal>
    </div>
  );
}
