import axios from '../../axios';
import * as actionTypes from './actionTypes';

export const tryAutoSignin = (token) => {
   return (dispatch) => {
      const headers = {
         "Authorization": token
      };
      axios.get('/users/me/refresh', { headers: headers })
         .then(response => {
            dispatch(signinSuccess(response.data.auth_token, false));
         })
         .catch(error => {
            console.log(error);
         });
   };
}

export const signin = (signinData) => {
   return (dispatch) => {
      axios.post('/users/login', signinData)
         .then(response => {
            localStorage.setItem("token", response.data.auth_token);
            dispatch(signinSuccess(response.data.auth_token));
         })
         .catch(error => {
            console.log(error);
         });
   };
};

export const signinSuccess = (token, showMessage = true) => {
   return (dispatch) => {
      const headers = {
         "Authorization": token
      };
      axios.get('/users/me', { headers: headers })
         .then(response => {
            const data = {
               token: token,
               userData: response.data.user
            };
            dispatch(storeUserData(data, showMessage));
         })
         .catch(error => {
            console.log(error);
         });
   };
};

export const storeUserData = (data, showMessage) => {
   return {
      type: actionTypes.STORE_USER_DATA,
      payload: {
         data: data,
         showMessage: showMessage
      }
   };
};

export const signup = (signupData) => {
   return (dispatch) => {
      axios.post('/users/register', signupData)
         .then(_response => {
            dispatch(signupSuccess());
         })
         .catch(error => {
            console.log(error);
         });
   };
};

export const signupSuccess = () => {
   return {
      type: actionTypes.SIGNUP_SUCCESS
   };
};
