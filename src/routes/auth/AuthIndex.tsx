import { Outlet } from "@tanstack/react-router";

const AuthIndex = () => {
  return (
    <div className="flex">
      <div
        className="w-1/2 h-screen"
        style={{
          backgroundImage: `url(/images/auth_background.jpg)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div className="w-1/2 h-screen flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthIndex;
