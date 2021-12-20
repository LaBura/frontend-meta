export const authReducer = (state = 0, action: any) => {
  switch (action.type) {
    case "CHANGE_LOGIN":
      return action.payload;

    default:
      return state;
  }
};
