import { RootRoute, Route, Router } from "@tanstack/react-router";
import App from "../App";
import AppIndex from "../routes/app/AppIndex";
import AuthIndex from "../routes/auth/AuthIndex";
import Login from "../routes/auth/Login";

const rootRoute = new RootRoute({
  component: App,
});

const appRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: AppIndex,
  beforeLoad: async () => {
    // perform a check here to make sure the user is authenticated.
  },
});

const authRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/auth",
  component: AuthIndex,
});

const loginRoute = new Route({
  getParentRoute: () => authRoute,
  path: "/",
  component: Login,
});

const routeTree = rootRoute.addChildren([
  appRoute,
  authRoute.addChildren([loginRoute]),
]);
const router = new Router({ routeTree });

export { router };
