import axios from "axios";
import { uri } from "..";

type LoginPayload = {
  email: string;
  password: string;
};

type ForgotPasswordPayload = {
  email: string;
};

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
