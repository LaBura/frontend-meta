export const questReducer = (state = 0, action: any) => {
  switch (action.type) {
    case "CHANGE_QUESTS":
      return action.payload;

    default:
      return state;
  }
};
export const questDoneReducer = (state = 0, action: any) => {
  switch (action.type) {
    case "CHANGE_QUESTS_DONE":
      return action.payload;

    default:
      return state;
  }
};
