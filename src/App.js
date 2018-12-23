import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import Banner from './components/Banner/Banner';
import FlowerGrid from './components/FlowerGrid/FlowerGrid';
import Signup from './containers/Signup/Signup';
import Signin from './containers/Signin/Signin';
import Profile from './containers/Profile/Profile';
import SignupSuccessMsg from './components/UI/SignupSuccessMsg/SignupSuccessMsg';
import SigninSuccessMsg from './components/UI/SigninSuccessMsg/SigninSuccessMsg';
import * as actionTypes from './store/actions';

class App extends Component {
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
      <Layout>
        <Banner />
        <FlowerGrid auth={this.props.auth} />
        {modalView}
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    modal: state.modalState,
    alertMessage: state.alertMsg,
    auth: state.authToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    goToSignin: () => dispatch({ type: actionTypes.VIEW_SIGNIN }),
    closeModal: () => dispatch({ type: actionTypes.MODAL_CANCEL }),
    goToProfile: () => dispatch({ type: actionTypes.VIEW_PROFILE })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
