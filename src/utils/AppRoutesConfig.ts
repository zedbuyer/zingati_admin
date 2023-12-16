import { Route } from "@tanstack/react-router";
import { appRoute } from "./RouteConfig";
import Dashboard from "../routes/app/Dashboard";
import Customers from "../routes/app/customers/Index";
import EditCustomer from "../routes/app/customers/Edit";
import Suppliers from "../routes/app/suppliers/Index";
import List from "../routes/app/generic/List";

export const dashboardRoute = new Route({
  getParentRoute: () => appRoute,
  path: "/",
  id: "dashboard",
  component: Dashboard,
});

export const customersRoute = new Route({
  getParentRoute: () => appRoute,
  path: "/customers",
  id: "all-customers",
  component: List,
});
const customerRoute = new Route({
  getParentRoute: () => appRoute,
  path: "/customers/$customerId",
  id: "customer",
  component: EditCustomer,
});

customersRoute.addChildren([customerRoute]);

export const suppliersRoute = new Route({
  getParentRoute: () => appRoute,
  path: "/suppliers",
  id: "all-suppliers",
  component: List,
});
