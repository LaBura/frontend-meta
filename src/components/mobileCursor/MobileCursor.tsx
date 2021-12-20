import { CURSORS } from "../../data/cursors";
import "./styles.scss";
interface MobileCursorProps {
  cursor: string;
}
export default function MobileCursor(props: MobileCursorProps) {
  const { cursor } = props;

  return (
    <>
      <div onClick={(e) => {}} title="Daily Quest" className="mobileCursor">
        <img
          // @ts-ignore
          src={CURSORS[cursor].img}
          className="mobileCursorIcon"
          alt=""
        />
      </div>
    </>
  );
}
