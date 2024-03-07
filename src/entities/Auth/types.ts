export interface IUser {
  email: string;
  fullName: string;
  id: number;
}
export type status = "not authorized" | "authorized";
export interface IData {
  userData: IUser;
  status: status;
}

export interface LoginDTO {}

export interface LogoutDTO {
  email: string;
  password: string;
}

export interface RegistrationDTO {
  email: string;
  fullName: string;
  password: string;
}
