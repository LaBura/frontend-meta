export const moneyReducer = (state = 0, action: any) => {
  switch (action.type) {
    case "CHANGE_MONEY":
      return action.payload;

    default:
      return state;
  }
};
