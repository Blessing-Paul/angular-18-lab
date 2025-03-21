export interface LoginModel {
  username: string;
  password: string;
}

// The Below Interface is for the login response on successful login
export interface users {
  id: string;
  username: string;
  password: string;
  role: string;
}
