import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { ProgressBar } from "../simpleComponents/progressBar/ProgressBar";
import bg from "../../assets/levelBg.png";
import { useEffect, useState } from "react";
import { LEVELS } from "../../data/level";
import Sound from "./Sound";
import Home from "./Home";
import Logout from "./Logout";
import { changeLogin } from "../../redux/actions";
import "./styles.scss";
import Avatar from "./Avatar";
interface LevelProps {
  idUser: number;
  friend: boolean;
}
export default function Level(props: LevelProps) {
  const { idUser, friend } = props;
  const level: { level: number; exp: number } = useSelector(
    (state: RootState) => state.level
  );
  const [exp, setExp] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    setExp(
      // @ts-ignore
      level.exp /
        // @ts-ignore
        (LEVELS[level.level + 2].exp + LEVELS[level.level + 1].exp)
    );
  }, [level]);
  return (
    <>
      <div
        className="containerLevel"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        {/* <img src={bg} className="bgLevel" alt="" /> */}
        <Avatar />
        <div className="idUser">#{`${idUser}`.padStart(7, "0")}</div>
        <div className="progressContainerLevel">{`Level ${level.level}`}</div>
        <ProgressBar
          percent={`${exp.toFixed(1)}`}
          // @ts-ignore
          label={`${level.exp}/${LEVELS[level.level + 2].exp}`}
        />
        <div className="boardIconsContainer">
          <Sound />
          <Home />
          {!friend && <Logout onClick={() => dispatch(changeLogin(false))} />}
        </div>
      </div>
    </>
  );
}
