import axios from "axios";
import { getCookieValue } from "../utils/cookies";
import { API_URL } from "./apiVariables";

export const login = async (walletAddress: string, signature: string) => {
  const baseURL = `${API_URL}/auth/login`;
  const body = {
    walletAddress,
    signature,
  };

  return axios
    .post(baseURL, body)
    .then((response: any) => {
      document.cookie = `Authorization=${response.data.cookie}`;
    })
    .catch((err) => {
      throw err;
    });
};

export const postData = (walletAddress: string) => {
  const baseURL = `${API_URL}/users/createUser`;
  const body = {
    walletAddress,
  };

  return axios
    .post(baseURL, body)
    .then((response: any) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

export const changeAvatar = (avatar: any) => {
  const baseURL = `${API_URL}/users/changeAvatar`;
  const body = {
    avatar,
  };
  const token = getCookieValue("Authorization");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return axios
    .put(baseURL, body, { headers })
    .then((response: any) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

export const getData = (walletAddr: string) => {
  const baseURL = `${API_URL}/users/checkUserExit/${walletAddr}`;
  return axios
    .get(baseURL)
    .then((response: any) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

export const signup = async (username: string, password: string) => {
  const baseURL = `${API_URL}/auth/signup`;
  const body = {
    address: username,
    password,
  };
  return axios
    .post(baseURL, body)
    .then((response: any) => {
      document.cookie = `Authorization=${response.data.cookie}`;

      return response.data.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const loadUserData = async () => {
  const baseURL = `${API_URL}/users/loadUserData`;
  const token = getCookieValue("Authorization");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return axios
    .get(baseURL, { headers })
    .then((response: any) => {
      return response.data.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const searchFriend = async (friendId: number) => {
  const baseURL = `${API_URL}/users/user/${friendId}`;
  const token = getCookieValue("Authorization");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return axios
    .get(baseURL, { headers })
    .then((response: any) => {
      return response.data.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const visitFriend = async (friendId: number) => {
  const baseURL = `${API_URL}/users/visit`;
  const body = {
    idFriend: friendId,
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
