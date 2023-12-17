import { Route } from "@tanstack/react-router";
import { appRoute } from "./RouteConfig";
import Dashboard from "../routes/app/Dashboard";
import EditCustomer from "../routes/app/customers/Edit";
import List from "../routes/app/generic/List";
import General from "../routes/app/customers/General";
import AuthInfo from "../routes/app/customers/AuthInfo";

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
export const customerRoute = new Route({
  getParentRoute: () => appRoute,
  path: "/customers/$customerId",
  id: "customer",
  component: EditCustomer,
});

customerRoute.addChildren([
  new Route({
    getParentRoute: () => customerRoute,
    id: "general-info",
    path: "/",
    component: General,
  }),
  new Route({
    getParentRoute: () => customerRoute,
    id: "auth-info",
    path: "/auth-info",
    component: AuthInfo,
  }),
]);

customersRoute.addChildren([customerRoute]);

export const suppliersRoute = new Route({
  getParentRoute: () => appRoute,
  path: "/suppliers",
  id: "all-suppliers",
  component: List,
});
