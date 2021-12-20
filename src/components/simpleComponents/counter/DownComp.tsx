import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import DetailsHover from "./DetailsHover";

export default function DownComp(props: any) {
  const { land, visible, changeLand, setWaterPause, wormPause, setWormPause } =
    props;
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let plantedTime = DateTime.fromISO(land.plantedTime);
    if (land) {
      setDate(plantedTime.plus({ days: 1 }).toJSDate());
      setWormPause(false);
      // setWaterPause(false);
    }
    // eslint-disable-next-line
  }, [land]);

  const isLandShouldBePaused = () => {
    let now = DateTime.fromJSDate(new Date());
    let plantedTime = DateTime.fromISO(land.plantedTime);
    let wormTime = DateTime.fromISO(land.wormStart);
    let noWaterTime = DateTime.fromISO(land.noWaterStart);

    if (land.worm && now >= wormTime) {
      const diffPTandWT = wormTime.diff(plantedTime);
      let tomorrow = now.plus({ days: 1 });
      let newDate = tomorrow.plus(-diffPTandWT).toJSDate();
      setDate(newDate);
      setWormPause(true);
    } else {
      setWormPause(false);
    }

    if (!land.water[1] && !land.water[0] && now >= noWaterTime) {
      setWaterPause(true);
    } else {
      setWaterPause(false);
    }

    changeLand(date);
  };

  return (
    <div
      style={{
        display: visible ? "flex" : "none",
      }}
    >
      <Countdown
        date={date}
        onMount={(time) => {
          isLandShouldBePaused();
        }}
        onTick={(time) => {
          isLandShouldBePaused();
        }}
        onStart={(time) => {
          isLandShouldBePaused();
        }}
        // @ts-ignore
        key={date}
        controlled={false}
        ref={(countdown: Countdown | null) => {
          wormPause && countdown?.getApi().pause();
        }}
        renderer={(props) => (
          <DetailsHover
            land={land}
            time={
              props.completed
                ? "DONE"
                : `${("00" + props.hours).slice(-2)}:${(
                    "00" + props.minutes
                  ).slice(-2)}:${("00" + props.seconds).slice(-2)}`
            }
          />
        )}
      />
    </div>
  );
}
