import React, { createContext } from "react";
import { AuthAction, AuthState } from "../../types/AuthTypes";

const defaultState: AuthState = {
  loggedIn: false,
};

const AuthContext = createContext<{
  authState: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}>({ authState: defaultState, dispatch: () => null });

export default AuthContext;
