import { DateTime, Duration } from "luxon";
import seed1 from "../../assets/seed1.png";
import seed2 from "../../assets/seed2.png";
import seed3 from "../../assets/seed3.png";
import { PLANT_TYPE } from "../../data/plants";

export const changeCursorStyle = (cursor: any, land: any, sell: boolean) => {
  if (cursor.name === "plant") {
    if (!land || sell) {
      return "notAllowed";
    } else if (land && land.plantedTime) {
      return "notAllowed";
    } else {
      return "allowed";
    }
  } else if (cursor.name === "shovel") {
    if (!land || sell) {
      return "notAllowed";
    } else if (land && !land.plantedTime) {
      return "notAllowed";
    } else {
      return "allowed";
    }
  } else if (cursor.name === "water") {
    if (!land || sell) {
      return "notAllowed";
    } else if (land && !land.water) {
      return "notAllowed";
    } else if (land && land.water[0] && land.water[1]) {
      return "notAllowed";
    } else if (land && land.water[1]) {
      return "notAllowed";
    } else if (land && land.water[0] && !land.water[1]) {
      let nwtp = DateTime.fromISO(land.noWaterStart);
      let n = DateTime.local();

      if (nwtp > n) {
        return "notAllowed";
      } else {
        return "allowed";
      }
    } else {
      return "allowed";
    }
  } else if (cursor.name === "spray") {
    if (!land || sell) {
      return "notAllowed";
    } else if (land && !land.worm) {
      return "notAllowed";
    } else if (land && land.worm) {
      let n = DateTime.local();
      let wormTime = DateTime.fromISO(land.wormStart);

      if (wormTime > n) {
        return "notAllowed";
      } else {
        return "allowed";
      }
    } else {
      return "allowed";
    }
  } else if (cursor.name === "harvest") {
    if (!land || sell) {
      return "notAllowed";
    } else if (land && !land.plantedTime) {
      return "notAllowed";
    } else if (land && !land.water[1]) {
      return "notAllowed";
    } else if (land && land.plantedTime) {
      let plantedTime = DateTime.fromISO(land.plantedTime);
      let lastPhase = plantedTime.plus(Duration.fromObject({ hours: 24 }));
      let n = DateTime.now();

      if (lastPhase > n) {
        return "notAllowed";
      } else {
        return "allowed";
      }
    } else {
      return "allowed";
    }
  } else if (cursor.name === "default") {
    return "default";
  }
};

export const changeLand = (date: any, land: any) => {
  let now = DateTime.now();
  let plantedTime = DateTime.fromJSDate(date).plus({ days: -1 });
  let secondPhase = plantedTime.plus(Duration.fromObject({ hours: 8 }));
  let thirdPhase = plantedTime.plus(Duration.fromObject({ hours: 16 }));
  let lastPhase = plantedTime.plus(Duration.fromObject({ hours: 24 }));

  if (now < secondPhase) {
    return seed1;
  } else if (lastPhase < now) {
    // @ts-ignore
    return PLANT_TYPE[land.plant.plant.name].seed4;
  } else if (thirdPhase < now) {
    return seed3;
  } else {
    return seed2;
  }
};
