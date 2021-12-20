import "./styles.scss";
import userAvatar from "../../assets/userAvatar.png";
import { CURSORS } from "../../data/cursors";

interface FriendProps {
  level: number;
  id: number;
  avatar: any;
}
export default function Friend(props: FriendProps) {
  const { level, id, avatar } = props;

  return (
    <>
      <div className="friend">
        <img
          src={avatar === "" || !avatar ? userAvatar : avatar}
          style={{
            cursor: CURSORS.pointer.src,
          }}
          alt=""
          onClick={() =>
            window.location.replace(`http://${window.location.host}/user/${id}`)
          }
          className="friendAvatar"
        />
        <div className="friendDetails">
          <div className="friendId">#{`${id}`.padStart(7, "0")}</div>
          <div className="level">level : {level}</div>
        </div>
      </div>
    </>
  );
}
