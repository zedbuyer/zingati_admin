import axios from "../../../app_axios";

export const fetchAllSuppliers = () => {
  return axios.get("api/suppliers");
};

export const fetchSingleSupplier = (supplierId: string) => {
  return axios.get(`api/suppliers/${supplierId}`);
};
