import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import coinIcon from "../../assets/bitcoin.svg";
import addIcon from "../../assets/add.svg";
import { moneyFormat } from "../../utils/number";
import { CURSORS } from "../../data/cursors";
import moneyBar from "../../assets/moneyBar.png";
import "./styles.scss";
export default function Money() {
  const money = useSelector((state: RootState) => state.money);
  return (
    <>
      <div
        className="container"
        style={{
          backgroundImage: `url(${moneyBar})`,
        }}
      >
        <div className="nestedContainer">
          <img src={coinIcon} alt="" className="coin" />
          <p
            style={{
              cursor: CURSORS.pointer.src,
            }}
            className="money"
            title={moneyFormat(money)}
          >
            {moneyFormat(money)}
          </p>
          <img
            style={{
              cursor: CURSORS.pointer.src,
            }}
            onClick={(e) => {
              window.open("https://pancakeswap.finance/", "_blank");
              e.stopPropagation();
            }}
            src={addIcon}
            alt=""
            className="add"
          />
        </div>
      </div>
    </>
  );
}
