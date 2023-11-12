import { AuthAction, AuthState } from "../../types/AuthTypes";

const initialAuthState: AuthState = {
  loggedIn: false,
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem(
        import.meta.env.ZG_AUTH_KEY,
        action.payload.jwt || ""
      );
      return { ...state, loggedIn: true, user: action.payload.user };

    case "UPDATE_USER":
      return { ...state, loggedIn: true, user: action.payload.user };
    case "LOGOUT":
      localStorage.clear();
      return initialAuthState;
    default:
      return state;
  }
}

export { initialAuthState, authReducer };
