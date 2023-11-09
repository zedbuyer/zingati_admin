import { RootRoute, Route, Router, redirect } from "@tanstack/react-router";
import App from "../App";
import AppIndex from "../routes/app/AppIndex";
import AuthIndex from "../routes/auth/AuthIndex";
import Login from "../routes/auth/Login";
import SendResetEmail from "../routes/auth/SendResetEmail";
import ResetPassword from "../routes/auth/ResetPassword";

const rootRoute = new RootRoute({
  component: App,
});

const appRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: AppIndex,
  beforeLoad: async () => {
    // perform a check here to make sure the user is authenticated.
    console.log("Checking authentication status");
    // only check the authentication state is correct, leave out evertyhing else.
    const jwt = localStorage.getItem(import.meta.env.ZG_AUTH_TOKEN);
    if (jwt === "" || jwt === null) {
      throw redirect({ to: "/auth" });
    }
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

const sendResetPasswordRoute = new Route({
  getParentRoute: () => authRoute,
  path: "forgot-password",
  component: SendResetEmail,
});

const resetPasswordRoute = new Route({
  getParentRoute: () => authRoute,
  path: "reset-password",
  component: ResetPassword,
});

const routeTree = rootRoute.addChildren([
  appRoute,
  authRoute.addChildren([
    loginRoute,
    sendResetPasswordRoute,
    resetPasswordRoute,
  ]),
]);
const router = new Router({ routeTree });

export { router };
