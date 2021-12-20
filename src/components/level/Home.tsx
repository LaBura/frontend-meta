import { CURSORS } from "../../data/cursors";
import "./styles.scss";
import home from "../../assets/boardIcons/home.png";

export default function Home() {
  return (
    <>
      <img
        style={{
          cursor: CURSORS.pointer.src,
        }}
        onClick={(e) => {
          window.location.replace(`http://${window.location.host}`);
          e.stopPropagation();
        }}
        title="Home"
        className="boardIcons"
        src={home}
        alt=""
      />
    </>
  );
}
