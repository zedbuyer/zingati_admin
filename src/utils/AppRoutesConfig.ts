import { Route } from "@tanstack/react-router";
import { appRoute } from "./RouteConfig";
import List from "../routes/app/generic/List";
import EditCustomer from "../routes/app/customers/Edit";
import General from "../routes/app/customers/General";
import AuthInfo from "../routes/app/customers/AuthInfo";
import Dashboard from "../routes/app/Dashboard";
import EditSupplier from "../routes/app/suppliers/Edit";
import { fetchAuthInfo, fetchCustomer } from "./queries/app/customers";

export const dashboardRoute = new Route({
  getParentRoute: () => appRoute,
  path: "/",
  id: "dashboard",
  component: Dashboard,
});

export const customersRoute = new Route({
  getParentRoute: () => appRoute,
  path: "customers",
  id: "all-customers",
  component: List,
});

export const customerRoute = new Route({
  getParentRoute: () => appRoute,
  path: "customers/$customerId",
  loader: ({ params: { customerId } }) => fetchCustomer(customerId),
  component: EditCustomer,
});

export const authInfoRoute = new Route({
  getParentRoute: () => customerRoute,
  path: "auth-info",
  component: AuthInfo,
  loader: ({ params: { customerId } }) => fetchAuthInfo(customerId),
});

export const generalInfoRoute = new Route({
  getParentRoute: () => customerRoute,
  component: General,
  path: "/",
  id: "general",
});

export const suppliersRoute = new Route({
  getParentRoute: () => appRoute,
  path: "suppliers",
  id: "all-suppliers",
  component: List,
});

export const supplierRoute = new Route({
  getParentRoute: () => appRoute,
  path: "suppliers/$supplierId",
  id: "supplier",
  component: EditSupplier,
});
