import axios from "axios";
import { uri } from "./queries";

const token = localStorage.getItem(import.meta.env.ZG_AUTH_KEY);

const appAxios = axios.create({
  baseURL: uri,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default appAxios;
