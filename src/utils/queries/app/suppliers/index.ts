import axios from "../../../app_axios";
import { BasicSupplierPayload } from "../../../types/SupplierTypes";

export const fetchAllSuppliers = () => {
  return axios.get("api/suppliers");
};

export const fetchSingleSupplier = (supplierId: string) => {
  return axios.get(`api/suppliers/${supplierId}`);
};

export const saveBasicSupplier = (payload: BasicSupplierPayload) => {
  return axios.put(`api/suppliers/${payload.id}`, {
    data: payload.data,
  });
};
