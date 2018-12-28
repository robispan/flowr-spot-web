import React from 'react';
import { connect } from 'react-redux';

import Banner from '../../components/UI/Banner/Banner';
import FlowerGrid from '../FlowerGrid/FlowerGrid';
import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';
import Profile from '../Profile/Profile';
import SignupSuccessMsg from '../../components/SignupSuccessMsg/SignupSuccessMsg';
import SigninSuccessMsg from '../../components/SigninSuccessMsg/SigninSuccessMsg';
import * as actionCreators from '../../store/actions/actions';
import SearchBar from '../../components/UI/SearchBar/SearchBar';

const main = (props) => {

   let modalView;
   switch (props.modalState) {
      case "signup":
         modalView = <Signup close={props.closeModal} />;
         break;
      case "signin":
         modalView = <Signin close={props.closeModal} />;
         break;
      case "profile":
         modalView = <Profile close={props.closeModal} />;
         break;
      case "signupSuccessMsg":
         modalView = <SignupSuccessMsg close={props.goToSignin} />;
         break;
      case "signinSuccessMsg":
         modalView = <SigninSuccessMsg close={props.closeModal} goToProfile={props.goToProfile} />;
         break;
      default:
         modalView = null;
   }

   let underToolbar = <Banner />;
   if (props.loggedIn) {
      if (props.modalState === "profile") {
         underToolbar = <div style={{ 'marginTop': '30px' }}></div>;
      }
      else {
         underToolbar = <div style={{ 'margin': '50px 0 30px' }}><SearchBar /></div>;
      }
   }

   return (
      <>
         {underToolbar}
         <FlowerGrid />
         {modalView}
      </>
   );
}


const mapStateToProps = state => {
   return {
      modalState: state.modalState,
      alertMessage: state.alertMsg,
      loggedIn: state.authToken !== null
   };
};

const mapDispatchToProps = dispatch => {
   return {
      goToSignin: () => dispatch(actionCreators.viewSignin()),
      goToProfile: () => dispatch(actionCreators.viewProfile()),
      closeModal: () => dispatch(actionCreators.closeModal())
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(main);
