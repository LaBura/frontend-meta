import * as React from "react";
import { CURSORS } from "../data/cursors";
interface SqrProps {
  onClick: Function;
  fill: string;
}
function Sqr(props: SqrProps) {
  const { fill, onClick } = props;
  return (
    <svg
      id="main-box"
      width="100px"
      height="50px"
      fill={fill}
      transform="skewX(-50) , skewY(10)"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        onClick={() => onClick()}
        cursor={CURSORS.pointer.src}
        pointerEvents="all"
      >
        <rect width="100px" height="50px" />
      </g>
    </svg>
  );
}

export default Sqr;
