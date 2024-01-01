import axios from "../../../app_axios";
import qs from "qs";

type GenericQueryFn = {
  path: string;
  populate?: object;
};

export const fetchGenericList = (params: GenericQueryFn) => {
  let populate = "";

  if (params.populate) {
    populate = "?" + qs.stringify({ populate: params.populate });
  }

  return axios.get(`api/${params.path}${populate}`);
};
