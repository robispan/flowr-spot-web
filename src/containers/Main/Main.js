import React, { Component } from 'react';
import { connect } from 'react-redux';

import Banner from '../../components/UI/Banner/Banner';
import FlowerGrid from '../FlowerGrid/FlowerGrid';
import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';
import Profile from '../Profile/Profile';
import SignupSuccessMsg from '../../components/SignupSuccessMsg/SignupSuccessMsg';
import SigninSuccessMsg from '../../components/SigninSuccessMsg/SigninSuccessMsg';
import * as actionCreators from '../../store/actions/actions';

class Main extends Component {
   render() {
      let modalView;
      switch (this.props.modalState) {
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
         case "closeModal":
            modalView = null;
            break;
         default:
            modalView = null;
      }
      return (
         <>
            <Banner />
            <FlowerGrid />
            {modalView}
         </>
      );
   }
}

const mapStateToProps = state => {
   return {
      modalState: state.modalState,
      alertMessage: state.alertMsg
   };
};

const mapDispatchToProps = dispatch => {
   return {
      goToSignin: () => dispatch(actionCreators.viewSignin()),
      closeModal: () => dispatch(actionCreators.closeModal()),
      goToProfile: () => dispatch(actionCreators.viewProfile())
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
