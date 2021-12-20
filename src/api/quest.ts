import axios from "axios";
import { getCookieValue } from "../utils/cookies";
import { API_URL } from "./apiVariables";
export const generateQuests = async () => {
  const baseURL = `${API_URL}/quest/generateQuests`;
  const token = getCookieValue("Authorization");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios
    .put(baseURL, {}, { headers })
    .then((response: any) => {
      return response.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
export const claimQuests = async () => {
  const baseURL = `${API_URL}/quest/harvestQuestPrize`;
  const token = getCookieValue("Authorization");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const body = {};
  return axios
    .put(baseURL, body, { headers })
    .then((response: any) => {
      return response.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
