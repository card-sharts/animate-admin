// import { USER_AUTH, LOGOUT, CHECKED_AUTH } from './reducers';
import { USER_AUTH } from './reducers';
// import { verifyUser, getProfile } from '../../services/api';
// import { getStoredUser, clearStoredUser } from '../../services/request';
// import { PROFILE_LOAD } from '../profile/reducers';

import { signin as signinApi } from '../../services/api';

const makeAuth = api => credentials => ({
  type: USER_AUTH,
  payload: api(credentials)
});


export const signin = makeAuth(signinApi);
// export const logout = () => ({ type: LOGOUT });

// const authChecked = () => ({ type: CHECKED_AUTH });

// export const tryLoadUser = () => dispatch => {

//   // USER COMES FROM LOCAL STORAGE
//   const user = getStoredUser();
//   if(!user || !user.token) {
//     return dispatch(authChecked());
//   }

//   verifyUser(user.token)
//     .then(() => dispatch({
//       type: USER_AUTH,
//       payload: user
//     }))
//     .then(() => {
//       dispatch({
//         type: PROFILE_LOAD,
//         payload: getProfile()
//       });
//     })
//     .catch(() => {
//       clearStoredUser();
//     })
//     .then(() => {
//       dispatch(authChecked());
//     });
// };
