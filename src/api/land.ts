import axios from "axios";
import { getCookieValue } from "../utils/cookies";
import { API_URL } from "./apiVariables";
export const buyLand = async () => {
  const baseURL = `${API_URL}/lands`;
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

export const landPlant = async (plantId: string, landId: string) => {
  const baseURL = `${API_URL}/lands/plantLand`;
  const token = getCookieValue("Authorization");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const body = {
    plantId: plantId,
    landId: landId,
  };
  return axios
    .put(baseURL, body, { headers })
    .then((response: any) => response.data.data)
    .catch((err) => {
      throw err;
    });
};

export const landSpray = async (landId: string) => {
  const baseURL = `${API_URL}/lands/sprayLand`;
  const token = getCookieValue("Authorization");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const body = {
    landId: landId,
  };
  return axios
    .put(baseURL, body, { headers })
    .then((response: any) => response.data.data)
    .catch((err) => {
      throw err;
    });
};

export const friendLandSpray = async (landId: string, friendId: number) => {
  const baseURL = `${API_URL}/lands/sprayFriendLand`;
  const token = getCookieValue("Authorization");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const body = {
    landId: landId,
    friendId: friendId,
  };
  return axios
    .put(baseURL, body, { headers })
    .then((response: any) => response.data.data)
    .catch((err) => {
      throw err;
    });
};

export const landWater = async (landId: string) => {
  const baseURL = `${API_URL}/lands/waterLand`;
  const token = getCookieValue("Authorization");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const body = {
    landId: landId,
  };
  return axios
    .put(baseURL, body, { headers })
    .then((response: any) => response.data.data)
    .catch((err) => {
      throw err;
    });
};
export const friendLandWater = async (landId: string, friendId: number) => {
  const baseURL = `${API_URL}/lands/waterFriendLand`;
  const token = getCookieValue("Authorization");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const body = {
    landId: landId,
    friendId: friendId,
  };
  return axios
    .put(baseURL, body, { headers })
    .then((response: any) => response.data.data)
    .catch((err) => {
      throw err;
    });
};

export const landHarvest = async (landId: string) => {
  const baseURL = `${API_URL}/lands/harvestLand`;
  const token = getCookieValue("Authorization");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const body = {
    landId: landId,
  };
  return axios
    .put(baseURL, body, { headers })
    .then((response: any) => response.data.data)
    .catch((err) => {
      throw err;
    });
};

export const landEmpty = async (landId: string) => {
  const baseURL = `${API_URL}/lands/emptyLand`;
  const token = getCookieValue("Authorization");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const body = {
    landId: landId,
  };
  return axios
    .put(baseURL, body, { headers })
    .then((response: any) => response.data.data)
    .catch((err) => {
      throw err;
    });
};
