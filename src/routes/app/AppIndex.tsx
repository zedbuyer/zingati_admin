import Sidebar from "../../components/app/Sidebar";

const AppIndex = () => {
  return (
    <div className="h-screen container mx-auto">
      <div className="w-full h-screen flex flex-row">
        <Sidebar />
      </div>
    </div>
  );
};

export default AppIndex;
