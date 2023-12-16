import axios from "../../../app_axios";

export const fetchAllSuppliers = () => {
  return axios.get("api/suppliers");
};
