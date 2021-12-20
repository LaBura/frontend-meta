import { useState } from "react";
import { useDispatch } from "react-redux";
import { buyPesticides } from "../../api/pesticides";
import { buyPlant } from "../../api/plants";
import { buyWater } from "../../api/water";
import {
  changeErrorMessage,
  changeInventory,
  changeMoney,
  changePesticides,
  changeWater,
} from "../../redux/actions";
import Button from "../simpleComponents/button/Button";
import boxRare from "../../assets/boxrare.png";
import boxNormal from "../../assets/boxnormal.png";
import waterIcon from "../../assets/water.png";
import pesticidesIcon from "../../assets/pesticides.png";
import "./styles.scss";
interface ItemPurchaseProps {
  route: string;
  onFinish: Function;
}
export default function ItemPurchase(props: ItemPurchaseProps) {
  const { route, onFinish } = props;
  const renderItem = () => {
    switch (route) {
      case "SeedsBox":
        return <SeedBox onFinish={(plant: any) => onFinish(plant)} />;

      case "Water":
        return <Water />;

      case "Pesticides":
        return <Pesticides />;

      default:
        return;
    }
  };
  return <div className="itemPurchase">{renderItem()}</div>;
}

function SeedBox({ onFinish }: any) {
  const dispatch = useDispatch();
  const [loadingNormal, setLoadingNormal] = useState(false);
  const [loadingRare, setLoadingRare] = useState(false);
  return (
    <div className="itemShop">
      <div>
        <div className="seedboxnormal">
          <img className="seedboxnormalImg" src={boxNormal} alt="" />
          <p>SeedBox Normal</p>
        </div>
        <Button
          label="1000 FFT"
          loading={loadingNormal}
          onClick={() => {
            async function getPlant() {
              return await buyPlant("normal");
            }
            setLoadingNormal(true);
            getPlant()
              .then((data) => {
                dispatch(changeInventory(data.inventory));
                setLoadingNormal(false);
                dispatch(changeMoney(data.money));
                onFinish(
                  data.inventory.plants[data.inventory.plants.length - 1]
                );
              })
              .catch((err) => {
                setLoadingNormal(false);
                dispatch(
                  changeErrorMessage({
                    message: err.response.data.message,
                    display: true,
                  })
                );
              });
          }}
        />
      </div>
      <div>
        <div className="seedboxrare">
          <img className="seedboxrareImg" src={boxRare} alt="" />
          <p>SeedBox Rare</p>
        </div>
        <Button
          label="3000 FFT"
          loading={loadingRare}
          onClick={() => {
            setLoadingRare(true);
            async function getPlant() {
              return await buyPlant("rare");
            }
            getPlant()
              .then((data) => {
                setLoadingRare(false);
                dispatch(changeInventory(data.inventory));
                dispatch(changeMoney(data.money));
                onFinish(
                  data.inventory.plants[data.inventory.plants.length - 1]
                );
              })
              .catch((err) => {
                setLoadingRare(false);
                dispatch(
                  changeErrorMessage({
                    message: err.response.data.message,
                    display: true,
                  })
                );
              });
          }}
        />
      </div>
    </div>
  );
}

function Water() {
  const [waterAmount, setWaterAmount] = useState(0);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <img className="waterIcon" src={waterIcon} alt="" />
      <p className="waterLabel">Water</p>
      <input
        type="number"
        value={waterAmount}
        onChange={(event) => setWaterAmount(Number(event.target.value))}
        className="waterInput"
        min={0}
      />
      <Button
        label={`${waterAmount * 2} FFT`}
        loading={loading}
        onClick={() => {
          async function getWater() {
            return await buyWater(waterAmount);
          }
          setLoading(true);

          getWater()
            .then((data) => {
              setLoading(false);
              dispatch(changeWater(data.water));
              dispatch(changeMoney(data.money));
            })
            .catch((err) => {
              setLoading(false);
              dispatch(
                changeErrorMessage({
                  message: err.response.data.message,
                  display: true,
                })
              );
            });
        }}
      />
    </div>
  );
}

function Pesticides() {
  const [pesticidesAmount, setPesticidesAmount] = useState(0);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <img className="pesticidesIcon" src={pesticidesIcon} alt="" />
      <p className="pesticidesLabel">Pesticides</p>
      <input
        type="number"
        value={pesticidesAmount}
        onChange={(event) => setPesticidesAmount(Number(event.target.value))}
        className="pesticidesInput"
      />
      <Button
        label={`${pesticidesAmount * 1} FFT`}
        loading={loading}
        onClick={() => {
          setLoading(true);
          async function getPesticides() {
            return await buyPesticides(pesticidesAmount);
          }
          getPesticides()
            .then((data) => {
              setLoading(false);
              dispatch(changePesticides(data.pesticides));
              dispatch(changeMoney(data.money));
            })
            .catch((err) => {
              setLoading(false);
              dispatch(
                changeErrorMessage({
                  message: err.response.data.message,
                  display: true,
                })
              );
            });
        }}
      />
    </div>
  );
}
