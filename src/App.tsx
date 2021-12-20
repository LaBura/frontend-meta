import React, { useEffect, useState } from "react";
import { MobileView } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import { loadUserData, visitFriend } from "./api/user";
import "./App.scss";
import bg from "./assets/bg7.png";
import bgnight from "./assets/bgnight.png";
import Auth from "./components/auth/Auth";
import Friends from "./components/friends/Friends";
import FullScreen from "./components/fullScreen/FullScreen";
import Land from "./components/land/Land";
import Level from "./components/level/Level";
import MobileCursor from "./components/mobileCursor/MobileCursor";
import Money from "./components/money/Money";
import Quests from "./components/quest/Quests";
import Loading from "./components/simpleComponents/loader/loading";
import Snackbar from "./components/simpleComponents/snackbar/Snackbar";
import ToolsMenu from "./components/toolMenu/ToolsMenu";
import { CURSORS } from "./data/cursors";
import {
  changeAvatar,
  changeCursor,
  changeHistoryFriends,
  changeInventory,
  changeLands,
  changeLevel,
  changeLogin,
  changeMoney,
  changePesticides,
  changeWater,
} from "./redux/actions";
import { RootState } from "./redux/reducers";
import { removeUNwantedBehavious } from "./utils/defaultBrowser";
import { isDay } from "./utils/number";

function App() {
  const dispatch = useDispatch();
  const cursor = useSelector((state: RootState) => state.cursor);
  const [loading, setLoading] = useState(true);
  const [idUser, setidUser] = useState(0);
  const [isFriends, setisFriends] = useState(false);
  const loggedin = useSelector((state: RootState) => state.login);

  useEffect(() => {
    removeUNwantedBehavious();
  });
  useEffect(() => {
    if (loggedin) {
      let loc = window.location.pathname.split("/");
      let isFriend =
        loc && loc[1] && loc[2] && loc[1] === "user" && !isNaN(Number(loc[2]));
      setisFriends(!!isFriend);
      getUser()
        .then((data) => {
          dispatch(changeMoney(data.money));
          dispatch(changeWater(data.water));
          dispatch(changePesticides(data.pesticides));
          dispatch(changeInventory(data.inventory));
          dispatch(changeHistoryFriends(data.friends));
          dispatch(changeLogin(true));
          if (isFriend) {
            let friendId = Number(loc[2]);
            visitFriendasync(friendId)
              .then((data) => {
                setidUser(friendId);
                setLoading(false);
                dispatch(changeLevel({ level: data.level, exp: data.exp }));
                dispatch(changeAvatar(data.avatar ? data.avatar : ""));
                dispatch(changeLands(data.lands));
              })
              .catch(() => {
                window.location.replace(window.location.origin);
                setLoading(false);
              });
          } else {
            dispatch(changeAvatar(data.avatar ? data.avatar : ""));
            dispatch(changeLevel({ level: data.level, exp: data.exp }));
            setidUser(data._id);
            dispatch(changeLands(data.lands));
            setLoading(false);
          }
        })
        .catch(() => {
          setLoading(false);
          dispatch(changeLogin(false));
        });
    } else {
      getUser()
        .then((data) => {
          dispatch(changeLogin(true));
        })
        .catch(() => {
          setLoading(false);
          dispatch(changeLogin(false));
        });
    }
  }, [dispatch, loggedin]);

  const clearCursor = () => {
    dispatch(changeCursor({ name: "default", cursor: CURSORS.default.src }));
  };

  async function getUser() {
    return await loadUserData();
  }
  async function visitFriendasync(id: number) {
    return await visitFriend(id);
  }

  return (
    <div
      className="App"
      style={{
        cursor: cursor.cursor,
        backgroundImage: `url(  ${isDay() ? bg : bgnight})`,
      }}
    >
      <div
        style={{
          display: !loading ? "none" : "block",
          height: "100%",
        }}
      >
        <Loading />
      </div>
      <div
        style={{
          display: loading ? "none" : "block",
        }}
        className="game"
        onClick={() => clearCursor()}
      >
        {loggedin ? (
          <div className="mainGame">
            <Land />
            <Money />
            <Level friend={isFriends} idUser={idUser} />

            <ToolsMenu />
            <Quests />
            <Friends />
            <Snackbar />
            <MobileView>
              <MobileCursor cursor={cursor.name} />
              <FullScreen />
            </MobileView>
          </div>
        ) : (
          <Auth onFinish={() => dispatch(changeLogin(true))} />
        )}
      </div>
    </div>
  );
}

export default App;
