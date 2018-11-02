import { get, post, put } from './request';

const URL = '/api';
const AUTH_URL = `${URL}/auth`;
const SIGNIN_URL = `${AUTH_URL}/signin`;

export const verifyUser = token => {
  return get(`${AUTH_URL}/verify`, {
    headers: {
      Authorization: token
    }
  });
};

export const signin = credentials => post(SIGNIN_URL, credentials);
