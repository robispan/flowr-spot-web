import * as actionTypes from './actionTypes';
const baseUrl = "https://flowrspot-api.herokuapp.com/api/v1/";

export const tryAutoSignin = (token) => {
   return (dispatch) => {
      const headers = {
         "Authorization": token
      };
      fetch(baseUrl + 'users/me/refresh', { headers: headers })
         .then(res => res.json())
         .then(data => {
            dispatch(signinSuccess(data.auth_token, false));
         })
         .catch(error => {
            console.log(error);
         });
   };
};

export const signin = (signinData) => {
   return (dispatch) => {
      const headers = {
         'Content-Type': 'application/json'
      };
      fetch(baseUrl + 'users/login',
         {
            method: 'POST',
            body: JSON.stringify(signinData),
            headers: headers
         })
         .then(res => res.json())
         .then(data => {
            localStorage.setItem("token", data.auth_token);
            dispatch(signinSuccess(data.auth_token));
         })
         .catch(error => {
            console.log(error);
         });
   };
};

export const signinSuccess = (token, showMessage = true) => {
   return (dispatch) => {
      const headers = {
         "Authorization": token,
         "Content-Type": "application/json"
      };
      fetch(baseUrl + 'users/me', { headers: headers })
         .then(res => res.json())
         .then(resData => {
            const data = {
               token: token,
               userData: resData.user
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
      const headers = {
         'Content-Type': 'application/json'
      };
      fetch(baseUrl + 'users/register',
         {
            method: 'POST',
            body: JSON.stringify(signupData),
            headers: headers
         })
         .then(response => response.json())
         .then(_data => {
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

export const viewSignin = () => {
   return {
      type: actionTypes.VIEW_SIGNIN
   };
};

export const viewSignup = () => {
   return {
      type: actionTypes.VIEW_SIGNUP
   };
};

export const viewProfile = () => {
   return {
      type: actionTypes.VIEW_PROFILE
   };
};

export const closeModal = () => {
   return {
      type: actionTypes.CLOSE_MODAL
   };
};

export const logout = () => {
   return {
      type: actionTypes.LOGOUT
   };
};