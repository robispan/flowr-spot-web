import * as actionTypes from './actionTypes';
const baseUrl = "https://flowrspot-api.herokuapp.com/api/v1/";

export const tryAutoSignin = (token) => {
   return (dispatch) => {
      const headers = {
         "Authorization": token
      };
      fetch(baseUrl + '/users/me/refresh', { headers: headers })
         .then(res => res.json())
         .then(data => {
            dispatch(signinSuccess(data.auth_token, false));
         })
         .catch(error => {
            console.log(error);
         });
   };
}

export const signin = (signinData) => {
   return (dispatch) => {
      fetch(baseUrl + '/users/login',
         {
            method: 'POST',
            body: JSON.stringify({ signinData })
         })
         .then(res => res.json())
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
      fetch(baseUrl + '/users/me', { headers: headers })
         .then(res => res.json())
         .then(data => {
            const payload = {
               token: token,
               userData: data.user
            };
            dispatch(storeUserData(payload, showMessage));
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
      fetch(baseUrl + '/users/register',
         {
            method: 'POST',
            body: JSON.stringify({ signupData })
         })
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