import { Outlet } from "@tanstack/react-router";

const App = () => {
  return (
    <div className="w-full h-screen bg-slate-50">
      <Outlet />
    </div>
  );
};

export default App;
