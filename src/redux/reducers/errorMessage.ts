export const errroMessageReducer = (
  state = { message: "default", display: false },
  action: any
) => {
  switch (action.type) {
    case "CHANGE_ERROR_MESSAGE":
      return action.payload;

    default:
      return state;
  }
};
