export const levelReducer = (state = { level: 0, exp: 0 }, action: any) => {
  switch (action.type) {
    case "CHANGE_LEVEL":
      return action.payload;

    default:
      return state;
  }
};
