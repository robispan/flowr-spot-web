import * as actionTypes from './actions/actionTypes';
import { updateObject } from './utility';

const initialState = {
   modalState: null,
   authToken: null,
   fname: null,
   lname: null,
   name: null
};

const storeUserData = (state, action) => {
   return {
      ...state,
      modalState: action.payload.showMessage ? "signinSuccessMsg" : null,
      fname: action.payload.data.userData.first_name,
      lname: action.payload.data.userData.last_name,
      name: action.payload.data.userData.first_name + ' ' + action.payload.data.userData.last_name,
      authToken: action.payload.data.token
   };
};

const logout = (state) => {
   localStorage.removeItem("token");
   return {
      ...state,
      modalState: null,
      fname: null,
      lname: null,
      name: null,
      authToken: null
   };
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.VIEW_SIGNUP: return updateObject(state, { modalState: "signup" });
      case actionTypes.VIEW_SIGNIN: return updateObject(state, { modalState: "signin" });
      case actionTypes.VIEW_PROFILE: return updateObject(state, { modalState: "profile" });
      case actionTypes.SIGNUP_SUCCESS: return updateObject(state, { modalState: "signupSuccessMsg" });
      case actionTypes.CLOSE_MODAL: return updateObject(state, { modalState: null });
      case actionTypes.STORE_USER_DATA: return storeUserData(state, action);
      case actionTypes.LOGOUT: return logout(state);
      default: return state;
   }
};

export default reducer;