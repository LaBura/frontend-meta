import { useEffect, useState } from "react";
import { GENE, PLANT_TYPE } from "../../data/plants";
import bg from "../../assets/plantPrizeBG.png";
import star from "../../assets/star.svg";
import { CURSORS } from "../../data/cursors";
import "./styles.scss";
interface ItemBoughtProps {
  plant: any;
}
export default function ItemBought(props: ItemBoughtProps) {
  const { plant } = props;
  const [plantLand, setplantLand] = useState();
  const [stars, setStars] = useState();
  useEffect(() => {
    // @ts-ignore
    let plantimg = PLANT_TYPE[plant.plant.name];
    setStars(plantimg.stars);
    setplantLand(plantimg.src);
  }, [plant.plant.name]);

  const renderGenes = () => {
    return (
      <div>
        {plant.genes?.map((plt: any, index: string) => (
          <img
            key={index}
            className="genes"
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

  const renderItem = () => {
    return (
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="itemBought"
      >
        <p className="itemBoughtName">{plant.plant.name}</p>
        <img className="itemBoughtPlantLand" src={plantLand} alt="" />
        <div
          style={{
            cursor: CURSORS.pointer.src,
          }}
          className="genesContainer"
        >
          {renderGenes()}
        </div>
        <div className="plantStars">
          {Array(stars)
            .fill(null)
            .map((_, index) => (
              <img key={index} src={star} className="plantStar" alt="" />
            ))}
        </div>
      </div>
    );
  };
  return <div className="itemBoughtContainer">{renderItem()}</div>;
}
