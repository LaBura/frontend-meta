import { useState } from "react";
import fullscreen from "../../assets/fullscreen.png";
import outFullscreen from "../../assets/outFullscreen.png";
import { CURSORS } from "../../data/cursors";
import { toggleFullscreen } from "../../utils/fullscreenbrowser";
import "./styles.scss";
interface FullScreenProps {}
export default function FullScreen(props: FullScreenProps) {
  const [icon, seticon] = useState(fullscreen);
  return (
    <>
      <div
        style={{
          cursor: CURSORS.pointer.src,
        }}
        onClick={(e) => {
          toggleFullscreen(icon === outFullscreen);
          seticon((icon) => {
            return icon === outFullscreen ? fullscreen : outFullscreen;
          });
        }}
        title="Daily Quest"
        className="fullscreen"
      >
        <img src={icon} className="fullscreenIcon" alt="" />
      </div>
    </>
  );
}
