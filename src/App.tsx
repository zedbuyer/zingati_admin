import { Outlet } from "@tanstack/react-router";

const App = () => {
  return (
    <>
      <h1>This is the app container</h1>
      <Outlet />
    </>
  );
};

export default App;
