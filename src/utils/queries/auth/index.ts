import axios from "axios";

type LoginPayload = {
  email: string;
  password: string;
};

export const loginUser = (payload: LoginPayload) => {
  return axios.post(`${import.meta.env.ZG_BASE_URL}api/auth/local`, {
    identifier: payload.email,
    password: payload.password,
  });
};
