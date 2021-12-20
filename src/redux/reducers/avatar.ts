export const avatarReducer = (state = 0, action: any) => {
  switch (action.type) {
    case "CHANGE_AVATAR":
      return action.payload;

    default:
      return state;
  }
};
