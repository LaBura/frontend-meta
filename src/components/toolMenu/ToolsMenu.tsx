import Tool from "./Tool";
import "./styles.scss";

export default function ToolsMenu() {
  let loc = window.location.pathname.split("/");

  return (
    <div className="containerToolMenu">
      {loc &&
      loc[1] &&
      loc[2] &&
      loc[1] === "user" &&
      !isNaN(Number(loc[2])) ? (
        <>
          <Tool name="WateringCan" />
          <Tool name="Pesticides" />
        </>
      ) : (
        <>
          <Tool name="Shop" />
          <Tool name="Inventory" />
          <Tool name="WateringCan" />
          <Tool name="Pesticides" />
          <Tool name="Hand" />
          <Tool name="Shovel" />
        </>
      )}
    </div>
  );
}
