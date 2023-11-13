import axios from "axios";

type LoginPayload = {
  email: string;
  password: string;
};

type ForgotPasswordPayload = {
  email: string;
};

const uri = import.meta.env.ZG_BASE_URL;

export const loginUser = (payload: LoginPayload) => {
  return axios.post(`${uri}api/auth/local`, {
    identifier: payload.email,
    password: payload.password,
  });
};

export const forgotPasswordQuery = (payload: ForgotPasswordPayload) => {
  return axios.post(`${uri}api/auth/forgot-password`, {
    email: payload.email,
  });
};
