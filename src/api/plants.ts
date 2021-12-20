import axios from "axios";
import { getCookieValue } from "../utils/cookies";
import { API_URL } from "./apiVariables";
export const buyPlant = async (rarity: string) => {
  const baseURL = `${API_URL}/plants/`;
  const token = getCookieValue("Authorization");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const body = {
    rarity: rarity,
  };
  return axios
    .put(baseURL, body, { headers })
    .then((response: any) => {
      return response.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
