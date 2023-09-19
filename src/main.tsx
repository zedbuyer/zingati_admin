import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./utils/RouteConfig.ts";
import { Helmet } from "react-helmet";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <Helmet titleTemplate="Zingati | %s" />
      <RouterProvider router={router} />
    </>
  </React.StrictMode>
);
