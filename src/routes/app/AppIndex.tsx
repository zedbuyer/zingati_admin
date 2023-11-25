import { Outlet } from "@tanstack/react-router";
import Sidebar from "../../components/app/Sidebar";

const AppIndex = () => {
  return (
    <div className="h-screen container mx-auto">
      <div className="w-full h-screen flex flex-row">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default AppIndex;
