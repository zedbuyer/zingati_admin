import { Outlet } from "@tanstack/react-router";
import PageContainer from "../../components/app/PageContainer";
import Sidebar from "../../components/app/Sidebar";

const AppIndex = () => {
  return (
    <div className="h-screen container mx-auto">
      <div className="w-full h-screen flex flex-row">
        <Sidebar />
        <PageContainer title="Dashboard">
          <Outlet />
        </PageContainer>
      </div>
    </div>
  );
};

export default AppIndex;
