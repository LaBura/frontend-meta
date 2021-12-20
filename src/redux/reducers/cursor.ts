import { CURSORS } from "../../data/cursors";

export const cursorReducer = (
  state = { name: "default", cursor: CURSORS.default.src },
  action: any
) => {
  switch (action.type) {
    case "CHANGE_CURSOR":
      return action.payload;

    default:
      return state;
  }
};
