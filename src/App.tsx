import { Outlet } from "@tanstack/react-router";
import AuthContext from "./utils/state/contexts/AuthContext";
import { useReducer } from "react";
import {
  authReducer,
  initialAuthState,
} from "./utils/state/reducers/AuthReducers";

const App = () => {
  const [authState, dispatch] = useReducer(authReducer, initialAuthState);
  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      <div className="w-full h-screen bg-slate-50">
        <Outlet />
      </div>
    </AuthContext.Provider>
  );
};

export default App;
