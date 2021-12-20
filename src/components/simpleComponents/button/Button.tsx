import React, { useEffect, useRef } from "react";
import { CURSORS } from "../../../data/cursors";
import "./Button.scss";

interface ButtonProps {
  onClick: Function;
  style?: React.CSSProperties;
  label: string;
  loading: boolean;
  disable?: boolean;
}

export default function Button(props: ButtonProps) {
  const { onClick, label, loading, disable } = props;
  const btnRef = useRef();
  useEffect(() => {
    // @ts-ignore
    btnRef.current.className = loading ? "button loading" : "button";
    // @ts-ignore
    btnRef.current.disabled = loading || disable;
  }, [loading, disable]);

  return (
    <button
      type="submit"
      style={{
        ...props.style,
        cursor: CURSORS.pointer.src,
      }}
      // @ts-ignore
      ref={btnRef}
      className="button"
      onClick={(e) => {
        onClick(e);
        e.stopPropagation();
      }}
      onBlur={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
    >
      {label}
    </button>
  );
}
