import { get, post, put } from './request';

const URL = '/api';
const AUTH_URL = `${URL}/auth`;
const SIGNIN_URL = `${AUTH_URL}/signin`;

export const signin = credentials => post(SIGNIN_URL, credentials);
