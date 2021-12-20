import { useState } from "react";
import underBar from "../../assets/friends.png";
import { CURSORS } from "../../data/cursors";
import Button from "../simpleComponents/button/Button";
import TextInput from "../simpleComponents/TextInput";
import Friend from "./Friend";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import "./styles.scss";
import { searchFriend } from "../../api/user";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
interface FriendsProps {}
export default function Friends(props: FriendsProps) {
  const [open, setopen] = useState(false);
  const [loading, setloading] = useState(false);
  const [friendId, setFriendId] = useState("");
  const [result, setResult] = useState({
    _id: 0,
    level: 0,
    avatar: 0,
  });
  const [error, seterror] = useState("");
  const friends = useSelector((state: RootState) => state.historyFriends);

  const renderFriends = () => {
    return (
      <div className="historyFriends">
        {friends &&
          friends.map((v: any, _i: number) => (
            <Friend key={_i} id={v._id} level={v.level} avatar={v.avatar} />
          ))}
      </div>
    );
  };
  const searchFriendApi = () => {
    async function searchFriendasync() {
      return await searchFriend(Number(friendId));
    }
    setloading(true);
    searchFriendasync()
      .then((data) => {
        setloading(false);
        setResult({
          _id: data._id,
          level: data.level,
          avatar: data.avatar,
        });
        console.log(data);
        console.log(result);
      })
      .catch(() => {
        setloading(false);
        seterror("No User Found");
      });
  };

  const renderSearchFriend = () => {
    return (
      <>
        {result.avatar !== 0 ? (
          <Friend id={result._id} level={result.level} avatar={result.avatar} />
        ) : (
          <div className="notFound">{error}</div>
        )}
      </>
    );
  };
  return (
    <>
      <div title="Friends" className="friends">
        <div
          className={
            !open ? "friendsIcon ModalOpen" : "friendsIcon ModalClosed"
          }
          style={{
            cursor: CURSORS.pointer.src,
          }}
        >
          <img
            src={underBar}
            onClick={(e) => {
              setopen((open) => !open);
            }}
            width={60}
            alt=""
            className="friendsIcon"
          />
        </div>

        <div
          style={{
            display: open ? "block" : "none",
          }}
          className="friendsContent"
        >
          <div className="searchContainer">
            <div className="searchInputContainer">
              <TextInput
                disabled={loading}
                onChange={(event: any) => {
                  setFriendId(event.target.value);
                }}
                type="text"
                value={friendId}
                className="inputSearch"
                placeholder="friend Id"
              />
              <Button
                label="Search"
                loading={loading}
                onClick={searchFriendApi}
                disable={loading || friendId.length === 0}
                style={{
                  padding: "5px 10px",
                  margin: 0,
                  marginLeft: 10,
                  fontSize: 16,
                }}
              />
            </div>
            <div className="searchResult">{renderSearchFriend()}</div>
          </div>
          <div className="titleHistory">History Friends</div>
          <SimpleBar className="simpleBarFriends">{renderFriends()}</SimpleBar>
        </div>
      </div>
    </>
  );
}
