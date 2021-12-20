export const landsReducer = (state = 0, action: any) => {
  switch (action.type) {
    case "CHANGE_LANDS":
      return action.payload;

    default:
      return state;
  }
};
export const landPlantReducer = (state = 0, action: any) => {
  switch (action.type) {
    case "CHANGE_LAND_PLANT":
      return action.payload;

    default:
      return state;
  }
};
