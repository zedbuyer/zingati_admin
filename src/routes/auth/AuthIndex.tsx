import { Outlet } from "@tanstack/react-router";

const AuthIndex = () => {
  return (
    <div className="flex">
      <div className="w-1/2 bg-purple-500 h-screen" />
      <div className="w-1/2 h-screen flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthIndex;
