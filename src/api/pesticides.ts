import axios from "axios";
import { getCookieValue } from "../utils/cookies";
import { API_URL } from "./apiVariables";
export const buyPesticides = async (pesticidesAmount: number) => {
  const baseURL = `${API_URL}/pesticides/`;
  const body = {
    pesticides: pesticidesAmount,
  };
  const token = getCookieValue("Authorization");
  const headers = {
    Authorization: `Bearer ${token}`,
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
