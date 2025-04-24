export interface LoginModel {
  username: string;
  password: string;
}

// The Below Interface is for the login response on successful login
export interface users {
  id: string;
  name: string;
  email: string
  password: string;
  role: string;
  gender: string

}

export interface Roles {
  value: string;
  viewValue: string;
}
