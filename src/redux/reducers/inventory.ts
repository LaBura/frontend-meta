export const inventoryReducer = (state = 0, action: any) => {
  switch (action.type) {
    case "CHANGE_INVENTORY":
      return action.payload;

    default:
      return state;
  }
};
