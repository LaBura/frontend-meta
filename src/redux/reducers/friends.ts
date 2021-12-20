export const historyFriendsReducer = (state = 0, action: any) => {
  switch (action.type) {
    case "CHANGE_HISTORY_FRIENDS":
      return action.payload;

    default:
      return state;
  }
};
