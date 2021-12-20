export const changeMoney = (newMoney: number) => {
  return {
    type: "CHANGE_MONEY",
    payload: newMoney,
  };
};
export const changeLevel = (newLevel: { level: number; exp: number }) => {
  return {
    type: "CHANGE_LEVEL",
    payload: newLevel,
  };
};
export const changeAvatar = (avatar: any) => {
  return {
    type: "CHANGE_AVATAR",
    payload: avatar,
  };
};
export const changeWater = (newWater: number) => {
  return {
    type: "CHANGE_WATER",
    payload: newWater,
  };
};
export const changePesticides = (newPesticides: number) => {
  return {
    type: "CHANGE_PESTICIDES",
    payload: newPesticides,
  };
};
export const changeInventory = (newInventory: any) => {
  return {
    type: "CHANGE_INVENTORY",
    payload: newInventory,
  };
};
export const changeLands = (newLands: any) => {
  return {
    type: "CHANGE_LANDS",
    payload: newLands,
  };
};
export const changeLogin = (user: boolean) => {
  return {
    type: "CHANGE_LOGIN",
    payload: user,
  };
};
export const changeLandPlant = (newPlant: any) => {
  return {
    type: "CHANGE_LAND_PLANT",
    payload: newPlant,
  };
};
export const changeCursor = (newCursor: { name: string; cursor: string }) => {
  return {
    type: "CHANGE_CURSOR",
    payload: newCursor,
  };
};
export const changeErrorMessage = (newMessage: any) => {
  return {
    type: "CHANGE_ERROR_MESSAGE",
    payload: { message: newMessage.message, display: newMessage.display },
  };
};
export const changeHistoryFriends = (history: any) => {
  return {
    type: "CHANGE_HISTORY_FRIENDS",
    payload: history,
  };
};
export const changeQuests = (quests: any) => {
  return {
    type: "CHANGE_QUESTS",
    payload: quests,
  };
};
export const questsDone = (questsDone: any) => {
  return {
    type: "CHANGE_QUESTS_DONE",
    payload: questsDone,
  };
};
