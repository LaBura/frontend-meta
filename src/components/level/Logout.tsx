import logout from "../../assets/boardIcons/logout.png";
import { CURSORS } from "../../data/cursors";
import { delete_cookie } from "../../utils/cookies";
import "./styles.scss";
interface LogoutProps {
  onClick: Function;
}
export default function Logout(props: LogoutProps) {
  return (
    <>
      <img
        style={{
          cursor: CURSORS.pointer.src,
        }}
        onClick={(e) => {
          delete_cookie("Authorization");
          // onClick();
          window.location.reload();
        }}
        title="Logout"
        src={logout}
        className="boardIcons"
        alt=""
      />
    </>
  );
}
