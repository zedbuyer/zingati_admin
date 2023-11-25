import { Route } from "@tanstack/react-router";
import { appRoute } from "./RouteConfig";
import Dashboard from "../routes/app/Dashboard";
import Customers from "../routes/app/customers/Index";
import EditCustomer from "../routes/app/customers/Edit";

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
  component: Customers,
});
const customerRoute = new Route({
  getParentRoute: () => appRoute,
  path: "/customers/$customerId",
  id: "customer",
  component: EditCustomer,
});

customersRoute.addChildren([customerRoute]);
