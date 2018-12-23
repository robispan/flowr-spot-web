import * as actionTypes from './actions';

const initialState = {
   modalState: null
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
      case actionTypes.SIGNUP_SUCCESS:
         return {
            ...state,
            modalState: "signupSuccessMsg"
         };
      case actionTypes.SIGNIN_SUCCESS:
         return {
            ...state,
            modalState: "signinSuccessMsg"
         };
      case actionTypes.MODAL_CANCEL:
         return {
            ...state,
            modalState: null
         };
      default:
         return state;
   }
};

export default reducer;