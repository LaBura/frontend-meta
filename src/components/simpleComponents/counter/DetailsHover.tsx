import React, { useEffect, useState } from "react";
import { GENE, PLANT_TYPE } from "../../../data/plants";
import "./styles.scss";
interface DetailsHoverProps {
  land: any;
  time: any;
}
export default function DetailsHover(props: DetailsHoverProps) {
  const { land, time } = props;
  const [profit, setprofit] = useState(0);
  useEffect(() => {
    // @ts-ignore
    setprofit(PLANT_TYPE[land.plant.plant.name].profit);
  }, [land]);

  const renderGenes = () => {
    return (
      <div>
        {land.plant.genes?.map((plt: any, index: string) => (
          <img
            key={index}
            className="genesDetails"
            // @ts-ignore
            src={GENE[plt._id].src}
            // @ts-ignore
            alt={GENE[plt._id].description}
            // @ts-ignore
            title={GENE[plt._id].description}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="detailsPLant">
      <div className="basicDetails">
        <div className="plantName">#{land.plant._id}</div>
        <img
          src={
            //@ts-ignore
            PLANT_TYPE[land.plant.plant.name].src
          }
          alt=""
          className="plantIcon"
        />
        <div>{renderGenes()}</div>
      </div>
      <div className="otherDetails">
        <div>
          {land.plant.plant.name} - Time : {time}
        </div>
        <div>
          Condition : {time === "DONE" ? "Harvestable" : "Growing"}{" "}
          {`(${profit}/${profit})`}
        </div>
        <div>Boost item : None</div>
      </div>
    </div>
  );
}
