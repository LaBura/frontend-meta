import { PLANT_STATES, PLANT_TYPE } from "../../data/plants";
import { useEffect, useRef, useState } from "react";
import landSign from "../../assets/landSign.png";
import landPlot from "../../assets/land.png";
import grassPlot from "../../assets/grass.png";
import crack from "../../assets/crack.png";
import wormAnimation from "../../assets/worm2.gif";
import seed1 from "../../assets/seed1.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import {
  changeCursor,
  changeErrorMessage,
  changeInventory,
  changeLandPlant,
  changeLands,
  changeLevel,
  changeMoney,
  changePesticides,
  changeWater,
} from "../../redux/actions";
import {
  friendLandSpray,
  friendLandWater,
  landEmpty,
  landHarvest,
  landPlant,
  landSpray,
  landWater,
} from "../../api/land";
import { CURSORS } from "../../data/cursors";
import "./Styles.scss";

import DownComp from "../simpleComponents/counter/DownComp";
import { changeCursorStyle, changeLand } from "./Services";
interface SquareType {
  land: any;
  sell: boolean;
  onClick: Function;
}
function Square(props: SquareType) {
  const { land, sell, onClick } = props;
  const plants = [
    PLANT_STATES.NO_PLANT.color,
    PLANT_STATES.PLANT_LVL0.color,
    PLANT_STATES.PLANT_LVL1.color,
    PLANT_STATES.PLANT_LVL2.color,
    PLANT_STATES.PLANT_LVL3.color,
  ];
  const cursor = useSelector((state: RootState) => state.cursor);
  const plantId = useSelector((state: RootState) => state.landPlant);
  const dispatch = useDispatch();
  const globalRef = useRef();
  const [displayTimer, setDisplayTimer] = useState(false);
  const [seedPhase, setSeedPhase] = useState(seed1);
  const [waterPause, setWaterPause] = useState(false);
  const [wormPause, setWormPause] = useState(false);
  const [friendLands, setfriendLands] = useState(false);
  const [harvestAnimation, setharvestAnimation] = useState(false);
  useEffect(() => {
    let loc = window.location.pathname.split("/");
    if (
      loc &&
      loc[1] &&
      loc[2] &&
      loc[1] === "user" &&
      !isNaN(Number(loc[2]))
    ) {
      setfriendLands(true);
    }
    document.documentElement.style.cursor = cursor.cursor;
    let changeCursor = changeCursorStyle(cursor, land, sell);
    if (changeCursor === "allowed") {
      // @ts-ignore
      globalRef.current.style.cursor = cursor.cursor;
    } else if (changeCursor === "notAllowed") {
      // @ts-ignore
      globalRef.current.style.cursor = CURSORS.notAllowed.src;
    } else {
      // @ts-ignore
      globalRef.current.style.cursor = CURSORS.default.src;
    }
  }, [cursor, land, sell]);

  const plantLand = () => {
    landPlant(plantId, land._id)
      .then((data: { inventory: any; lands: any }) => {
        dispatch(changeInventory(data.inventory));
        dispatch(changeLands(data.lands));
        dispatch(
          changeCursor({ name: "default", cursor: CURSORS.default.src })
        );
      })
      .catch((err: any) => {
        dispatch(
          changeErrorMessage({
            message: err.response.data.message,
            display: true,
          })
        );
        dispatch(
          changeCursor({ name: "default", cursor: CURSORS.default.src })
        );

        dispatch(changeLandPlant(null));
      });
  };

  const sprayLand = () => {
    let loc = window.location.pathname.split("/");
    if (friendLands) {
      let friendId = Number(loc[2]);
      friendLandSpray(land._id, friendId)
        .then((data: any) => {
          dispatch(changePesticides(data.pesticides));
          dispatch(changeLands(data.lands));
        })
        .catch((err: any) => {
          dispatch(
            changeCursor({ name: "default", cursor: CURSORS.default.src })
          );

          dispatch(
            changeErrorMessage({
              message: err.response.data.message,
              display: true,
            })
          );
        });
    } else {
      landSpray(land._id)
        .then((data: any) => {
          dispatch(changePesticides(data.pesticides));
          dispatch(changeLands(data.lands));
        })
        .catch((err: any) => {
          dispatch(
            changeCursor({ name: "default", cursor: CURSORS.default.src })
          );
          dispatch(
            changeErrorMessage({
              message: err.response.data.message,
              display: true,
            })
          );
        });
    }
  };

  const waterLand = () => {
    let loc = window.location.pathname.split("/");

    if (friendLands) {
      let friendId = Number(loc[2]);
      friendLandWater(land._id, friendId)
        .then((data: any) => {
          console.log(data);

          dispatch(changeWater(data.water));
          dispatch(changeLands(data.lands));
        })
        .catch((err: any) => {
          dispatch(
            changeCursor({ name: "default", cursor: CURSORS.default.src })
          );
          dispatch(
            changeErrorMessage({
              message: err.response.data.message,
              display: true,
            })
          );
        });
    } else {
      landWater(land._id)
        .then((data: any) => {
          dispatch(changeWater(data.water));
          dispatch(changeLands(data.lands));
        })
        .catch((err: any) => {
          dispatch(
            changeCursor({ name: "default", cursor: CURSORS.default.src })
          );
          dispatch(
            changeErrorMessage({
              message: err.response.data.message,
              display: true,
            })
          );
        });
    }
  };

  const harvestLand = () => {
    landHarvest(land._id)
      .then((data: any) => {
        dispatch(changeMoney(data.user.money));
        dispatch(changeLevel({ level: data.user.level, exp: data.user.exp }));
        dispatch(changeLands(data.user.lands));
        dispatch(changeInventory(data.user.inventory));
        // dispatch(
        //   changeCursor({ name: "default", cursor: CURSORS.default.src })
        // );
        setharvestAnimation(true);
        setTimeout(() => {
          setharvestAnimation(false);
        }, 1500);
      })
      .catch((err: any) => {
        dispatch(
          changeErrorMessage({
            message: err.response.data.message,
            display: true,
          })
        );
        // dispatch(
        //   changeCursor({ name: "default", cursor: CURSORS.default.src })
        // );
      });
  };

  const emptyLand = () => {
    landEmpty(land._id)
      .then((data: any) => {
        dispatch(changeLands(data.lands));
        dispatch(changeInventory(data.inventory));
        // dispatch(
        //   changeCursor({ name: "default", cursor: CURSORS.default.src })
        // );
      })
      .catch((err: any) => {
        dispatch(
          changeErrorMessage({
            message: err.response.data.message,
            display: true,
          })
        );
        // dispatch(
        //   changeCursor({ name: "default", cursor: CURSORS.default.src })
        // );
      });
  };

  const clickLand = (e: { stopPropagation: () => void }) => {
    let changeCursor = changeCursorStyle(cursor, land, sell) === "allowed";
    if (cursor.name === "plant" && changeCursor) {
      plantLand();
    } else if (cursor.name === "spray" && changeCursor) {
      sprayLand();
    } else if (cursor.name === "water" && changeCursor) {
      waterLand();
    } else if (cursor.name === "harvest" && changeCursor) {
      harvestLand();
    } else if (cursor.name === "shovel" && changeCursor) {
      emptyLand();
    }
    e.stopPropagation();
  };

  const buyLand = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    cursor.name === "default" && onClick();
  };

  return (
    <>
      <div
        // @ts-ignore
        ref={globalRef}
        onMouseEnter={() => setDisplayTimer(true)}
        onTouchStart={() => setDisplayTimer((val) => !val)}
        onMouseLeave={() => setDisplayTimer(false)}
        onClick={clickLand}
        className={"square"}
      >
        <div className="landPlot">
          <img
            src={land ? landPlot : grassPlot}
            alt=""
            className="landPlotImg"
          />
        </div>
        {land && land.plantedTime && (
          <>
            <div
              className={
                harvestAnimation ? "hervest animationHarvest" : "hervest"
              }
            >
              <img
                src={
                  // @ts-ignore
                  PLANT_TYPE[land.plant.plant.name].src
                }
                alt=""
                className="harvestPlantIcon"
              />
              <div className="harvestPlantProfit">
                {"+ " +
                  // @ts-ignore
                  PLANT_TYPE[land.plant.plant.name].profit}
              </div>
            </div>
            <div className={"land"}>
              <img src={seedPhase} alt="" className={"land4"} />
            </div>
          </>
        )}

        {sell && !friendLands && (
          <div
            onClick={buyLand}
            style={{
              cursor: CURSORS.pointer.src,
            }}
            className={"sign"}
          >
            <img src={landSign} className={"land4"} alt="" />
          </div>
        )}

        {land && land.plantedTime && waterPause && (
          <img src={crack} alt="" className="crack" />
        )}
        {land && land.plantedTime && wormPause && (
          <div className="worm">
            <img src={wormAnimation} alt="" />
          </div>
        )}
        {land && land.plantedTime && (
          <div
            className={
              displayTimer ? "timercontainer" : "timercontainer hideTimer"
            }
          >
            <DownComp
              land={land}
              plantsLength={plants.length}
              visible={true}
              changeLand={(date: any) => setSeedPhase(changeLand(date, land))}
              waterPause={waterPause}
              setWaterPause={(val: boolean) => setWaterPause(val)}
              wormPause={wormPause}
              setWormPause={(val: boolean) => setWormPause(val)}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Square;
