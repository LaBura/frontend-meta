import React from "react";
import "./loading.scss";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        fontSize: 22,
        color: "white",
      }}
    >
      <div className="lds-hourglass"></div>
      <p>Loading</p>
    </div>
  );
}
