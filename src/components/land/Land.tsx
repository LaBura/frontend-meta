import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyLand } from "../../api/land";
import { LAND_PRICES } from "../../data/land";
import {
  changeErrorMessage,
  changeLands,
  changeMoney,
} from "../../redux/actions";
import { RootState } from "../../redux/reducers";
import Dialog from "../simpleComponents/dialog/Dialog";
import Square from "../Square/Square";
import "./styles.scss";
function Land(props: LandType) {
  const [visibleBuyLand, setVisibleBuyLand] = useState(false);
  const [priceBuyLand, setPriceBuyLand] = useState(0);
  const lands: [] = useSelector((state: RootState) => state.lands);
  let landsArray = Array.from(Array(15).keys());
  const dispatch = useDispatch();

  landsArray = landsArray.map((_, index) => lands[index]);

  const onClickToBuy = () => {
    // @ts-ignore
    setPriceBuyLand(LAND_PRICES[lands.length + 1].price);
    setVisibleBuyLand(true);
  };
  const onCloseDialog = () => {
    setVisibleBuyLand(false);
  };
  const onAcceptDialog = () => {
    buyLand()
      .then((data: { money: any; lands: any }) => {
        dispatch(changeLands(data.lands));
        dispatch(changeMoney(data.money));
        setVisibleBuyLand(false);
      })
      .catch((err) => {
        setVisibleBuyLand(false);
        dispatch(
          changeErrorMessage({
            message: err.response.data.message,
            display: true,
          })
        );
      });
  };
  return (
    <>
      <Dialog
        message={"Do You Want To Buy This Land"}
        price={priceBuyLand}
        visible={visibleBuyLand}
        onClose={onCloseDialog}
        onAccept={onAcceptDialog}
      />

      <div className="landContainer">
        <div className={"miniLand"}>
          <Square onClick={onClickToBuy} land={landsArray[0]} sell={false} />
          <Square
            onClick={onClickToBuy}
            land={landsArray[1]}
            sell={!landsArray[1] && !!landsArray[0]}
          />
          <Square
            onClick={onClickToBuy}
            land={landsArray[2]}
            sell={!landsArray[2] && !!landsArray[1]}
          />
          <Square
            onClick={onClickToBuy}
            land={landsArray[3]}
            sell={!landsArray[3] && !!landsArray[2]}
          />
          <Square
            onClick={onClickToBuy}
            land={landsArray[4]}
            sell={!landsArray[4] && !!landsArray[3]}
          />
        </div>
        <div className={"miniLand"}>
          <Square
            onClick={onClickToBuy}
            land={landsArray[5]}
            sell={!landsArray[5] && !!landsArray[4]}
          />
          <Square
            onClick={onClickToBuy}
            land={landsArray[6]}
            sell={!landsArray[6] && !!landsArray[5]}
          />
          <Square
            onClick={onClickToBuy}
            land={landsArray[7]}
            sell={!landsArray[7] && !!landsArray[6]}
          />
          <Square
            onClick={onClickToBuy}
            land={landsArray[8]}
            sell={!landsArray[8] && !!landsArray[7]}
          />
          <Square
            onClick={onClickToBuy}
            land={landsArray[9]}
            sell={!landsArray[9] && !!landsArray[8]}
          />
        </div>

        <div className={"miniLand"}>
          <Square
            onClick={onClickToBuy}
            land={landsArray[10]}
            sell={!landsArray[10] && !!landsArray[9]}
          />
          <Square
            onClick={onClickToBuy}
            land={landsArray[11]}
            sell={!landsArray[11] && !!landsArray[10]}
          />

          <Square
            onClick={onClickToBuy}
            land={landsArray[12]}
            sell={!landsArray[12] && !!landsArray[11]}
          />
          <Square
            onClick={onClickToBuy}
            land={landsArray[13]}
            sell={!landsArray[13] && !!landsArray[12]}
          />
          <Square
            onClick={onClickToBuy}
            land={landsArray[14]}
            sell={!landsArray[14] && !!landsArray[13]}
          />
        </div>
      </div>
    </>
  );
}

interface LandType {}

export default Land;
