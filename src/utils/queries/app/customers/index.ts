import appAxios from "../../../app_axios";

export const fetchAllCustomers = () => {
  return appAxios.get(
    `api/customers?fields%5B0%5D=id&fields%5B1%5D=first_name&fields%5B2%5D=last_name&fields%5B3%5D=createdAt&populate%5Bauth_info%5D%5Bfields%5D%5B0%5D=email&populate%5Bauth_info%5D%5Bfields%5D%5B1%5D=confirmed`
  );
};
