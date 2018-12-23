import * as actionTypes from './actions';

const initialState = {
   modalState: 'profile'
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.VIEW_SIGNUP:
         return {
            modalState: "signup"
         };
      case actionTypes.VIEW_SIGNIN:
         return {
            modalState: "signin"
         };
      case actionTypes.VIEW_PROFILE:
         return {
            modalState: "profile"
         };
      case actionTypes.MODAL_CANCEL:
         return {
            modalState: null
         };
      default:
         return state;
   }
};

export default reducer;