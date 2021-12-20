import axios from "axios";
import { getCookieValue } from "../utils/cookies";
import { API_URL } from "./apiVariables";
export const buyWater = async (waterAmount: number) => {
  const baseURL = `${API_URL}/water/`;
  const token = getCookieValue("Authorization");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const body = {
    water: waterAmount,
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
