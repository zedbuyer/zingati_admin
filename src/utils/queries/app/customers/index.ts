import axios from "../../../app_axios";
import qs from "qs";

export const fetchAllCustomers = () => {
  return axios.get(
    `api/customers?fields%5B0%5D=id&fields%5B1%5D=first_name&fields%5B2%5D=last_name&fields%5B3%5D=createdAt&populate%5Bauth_info%5D%5Bfields%5D%5B0%5D=email&populate%5Bauth_info%5D%5Bfields%5D%5B1%5D=confirmed`
  );
};

export const fetchCustomer = (customerId: string) => {
  return axios.get(`api/customers/${customerId}`);
};

export const fetchAuthInfo = (customerId: string) => {
  const query = {
    populate: ["auth_info"],
  };

  return axios.get(`api/customers/${customerId}?${qs.stringify(query)}`);
};

type AuthInfo = {
  username?: string;
  email?: string;
  blocked?: boolean;
};

type SaveAuthInfoPayload = {
  userId: string;
  auth_info: AuthInfo;
};

export const saveAuthInfo = (payload: SaveAuthInfoPayload) => {
  return axios.put(`api/users/${payload.userId}`, payload.auth_info);
};
