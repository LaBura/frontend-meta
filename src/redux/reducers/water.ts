export const waterReducer = (state = 0, action: any) => {
  switch (action.type) {
    case "CHANGE_WATER":
      return action.payload;
    default:
      return state;
  }
};
