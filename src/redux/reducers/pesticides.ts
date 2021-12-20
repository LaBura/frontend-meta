export const pesticidesReducer = (state = 0, action: any) => {
  switch (action.type) {
    case "CHANGE_PESTICIDES":
      return action.payload;

    default:
      return state;
  }
};
