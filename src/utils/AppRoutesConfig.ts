import { Route } from "@tanstack/react-router";
import { appRoute } from "./RouteConfig";
import Dashboard from "../routes/app/Dashboard";

export const dashboardRoute = new Route({
  getParentRoute: () => appRoute,
  path: "/",
  id: "dashboard",
  component: Dashboard,
});
