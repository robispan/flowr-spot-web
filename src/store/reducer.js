import * as actionTypes from './actions';

const initialState = {
   modalState: null,
   authToken: null,
   fname: null,
   lname: null,
   name: null
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.VIEW_SIGNUP:
         return {
            ...state,
            modalState: "signup"
         };
      case actionTypes.VIEW_SIGNIN:
         return {
            ...state,
            modalState: "signin"
         };
      case actionTypes.VIEW_PROFILE:
         return {
            ...state,
            modalState: "profile"
         };
      case actionTypes.MODAL_CANCEL:
         return {
            ...state,
            modalState: null
         };
         case actionTypes.SIGNUP_SUCCESS:
            return {
               ...state,
               modalState: "signupSuccessMsg"
            };
      case actionTypes.SIGNIN_SUCCESS:
         return {
            ...state,
            modalState: "signinSuccessMsg",
            fname: action.payload.userData.first_name,
            lname: action.payload.userData.last_name,
            name: action.payload.userData.first_name + ' ' + action.payload.userData.last_name,
            authToken: action.payload.token
         };
      case actionTypes.LOGOUT:
         return {
            ...state,
            modalState: null,
            fname: null,
            lname: null,
            name: null,
            authToken: null
         };
      default:
         return state;
   }
};

export default reducer;