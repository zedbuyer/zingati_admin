import { Outlet } from "@tanstack/react-router";

const AuthIndex = () => {
  return (
    <>
      <h1>Auth Page</h1>
      <Outlet />
    </>
  );
};

export default AuthIndex;
