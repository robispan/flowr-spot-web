import * as actionTypes from './actions/actionTypes';

const initialState = {
  modalState: null,
  authToken: null,
  fname: null,
  lname: null,
  name: null
};

const viewSignup = state => {
  return {
    ...state,
    modalState: 'signup'
  };
};

const viewSignin = state => {
  return {
    ...state,
    modalState: 'signin'
  };
};

const viewProfile = state => {
  return {
    ...state,
    modalState: 'profile'
  };
};

const signupSuccess = state => {
  return {
    ...state,
    modalState: 'signupSuccessMsg'
  };
};

const closeModal = state => {
  return {
    ...state,
    modalState: null
  };
};

const storeUserData = (state, action) => {
  return {
    ...state,
    modalState: action.payload.showMessage ? 'signinSuccessMsg' : null,
    fname: action.payload.data.userData.first_name,
    lname: action.payload.data.userData.last_name,
    name:
      action.payload.data.userData.first_name +
      ' ' +
      action.payload.data.userData.last_name,
    authToken: action.payload.data.token
  };
};

const logout = state => {
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
    case actionTypes.VIEW_SIGNUP:
      return viewSignup(state);
    case actionTypes.VIEW_SIGNIN:
      return viewSignin(state);
    case actionTypes.VIEW_PROFILE:
      return viewProfile(state);
    case actionTypes.SIGNUP_SUCCESS:
      return signupSuccess(state);
    case actionTypes.CLOSE_MODAL:
      return closeModal(state);
    case actionTypes.STORE_USER_DATA:
      return storeUserData(state, action);
    case actionTypes.LOGOUT:
      return logout(state);
    default:
      return state;
  }
};

export default reducer;
