import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { avatarReducer } from "./avatar";
import { cursorReducer } from "./cursor";
import { errroMessageReducer } from "./errorMessage";
import { historyFriendsReducer } from "./friends";
import { inventoryReducer } from "./inventory";
import { landPlantReducer, landsReducer } from "./land";
import { levelReducer } from "./level";
import { moneyReducer } from "./money";
import { pesticidesReducer } from "./pesticides";
import { questDoneReducer, questReducer } from "./quest";
import { waterReducer } from "./water";

export const allReducers = combineReducers({
  money: moneyReducer,
  level: levelReducer,
  water: waterReducer,
  pesticides: pesticidesReducer,
  inventory: inventoryReducer,
  lands: landsReducer,
  landPlant: landPlantReducer,
  cursor: cursorReducer,
  errorMessage: errroMessageReducer,
  login: authReducer,
  historyFriends: historyFriendsReducer,
  quests: questReducer,
  questsDone: questDoneReducer,
  avatar: avatarReducer,
});
export type RootState = ReturnType<typeof allReducers>;
