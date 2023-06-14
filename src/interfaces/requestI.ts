import { Request } from 'express';
import userData from './userDataI';

export interface UserRequestI extends Request {
  User: userData
}

export interface Body{
  username :string,
  email :string,
  password :string,
  weight :string,
  height :string,
  gender :string,
  goalWeight :string,
 role :string
}
