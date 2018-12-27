import React, { Component } from 'react';
import { connect } from 'react-redux';

import Banner from '../../components/UI/Banner/Banner';
import FlowerGrid from '../FlowerGrid/FlowerGrid';
import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';
import Profile from '../Profile/Profile';
import SignupSuccessMsg from '../../components/SignupSuccessMsg/SignupSuccessMsg';
import SigninSuccessMsg from '../../components/SigninSuccessMsg/SigninSuccessMsg';
import * as actionTypes from '../../store/actions/actionTypes';

class Main extends Component {
   render() {
      let modalView;
      switch (this.props.modal) {
         case "signup":
            modalView = <Signup />;
            break;
         case "signin":
            modalView = <Signin />;
            break;
         case "profile":
            modalView = <Profile />;
            break;
         case "signupSuccessMsg":
            modalView = <SignupSuccessMsg dismiss={this.props.goToSignin} />;
            break;
         case "signinSuccessMsg":
            modalView = (
               <SigninSuccessMsg
                  dismiss={this.props.closeModal}
                  goToProfile={this.props.goToProfile} />
            );
            break;
         default:
            modalView = null;
      }
      return (
         <>
            <Banner />
            <FlowerGrid authToken={this.props.authToken} />
            {modalView}
         </>
      );
   }
}

const mapStateToProps = state => {
   return {
      modal: state.modalState,
      alertMessage: state.alertMsg,
      authToken: state.authToken
   };
};

const mapDispatchToProps = dispatch => {
   return {
      goToSignin: () => dispatch({ type: actionTypes.VIEW_SIGNIN }),
      closeModal: () => dispatch({ type: actionTypes.CLOSE_MODAL }),
      goToProfile: () => dispatch({ type: actionTypes.VIEW_PROFILE })
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
