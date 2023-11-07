export type User = {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
};

export type AuthToken = string;

export type AuthState = {
  loggedIn: boolean;
  user?: User;
  jwt?: string;
};

export type AuthAction = {
  type: string;
  payload: AuthState;
};
