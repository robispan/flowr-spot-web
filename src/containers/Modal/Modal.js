import React from 'react';
import { connect } from 'react-redux';

import classes from './Modal.module.css';
import BackDrop from './Backdrop/Backdrop';
import Signup from './Signup/Signup';
import Signin from './Signin/Signin';
import Profile from './Profile/Profile';
import SignupSuccessMsg from './Signup/SignupSuccessMsg/SignupSuccessMsg';
import SigninSuccessMsg from './Signin/SigninSuccessMsg/SigninSuccessMsg';
import * as actionCreators from '../../store/actions/actions';

const modal = props => {
  if (!props.modalState) return null;

  let topOffset = 1;

  let content;
  switch (props.modalState) {
    case 'signup':
      content = <Signup />;
      break;
    case 'signin':
      content = <Signin />;
      break;
    case 'profile':
      content = <Profile />;
      topOffset = 2;
      break;
    case 'signupSuccessMsg':
      content = <SignupSuccessMsg close={props.goToSignin} />;
      break;
    case 'signinSuccessMsg':
      content = (
        <SigninSuccessMsg
          close={props.closeModal}
          goToProfile={props.goToProfile}
        />
      );
      break;
    default:
      content = null;
  }

  const classList = [classes['Modal'], classes['top' + topOffset]];

  return (
    <div className={classes.Container}>
      <BackDrop click={props.closeModal} />
      <div className={classList.join(' ')}>{content}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    modalState: state.modalState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    goToSignin: () => dispatch(actionCreators.viewSignin()),
    goToProfile: () => dispatch(actionCreators.viewProfile()),
    closeModal: () => dispatch(actionCreators.closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(modal);
