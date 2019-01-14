import React from 'react';
import { connect } from 'react-redux';

import BackDrop from './Backdrop';
import Signup from './Signup/Signup';
import Signin from './Signin/Signin';
import Profile from './Profile';
import SignupSuccessMsg from './Signup/SignupSuccessMsg';
import SigninSuccessMsg from './Signin/SigninSuccessMsg';
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

  const classList = ['Modal', 'top' + topOffset];

  return (
    <div className="Container">
      <BackDrop click={props.closeModal} />
      <div className={classList.join(' ')}>{content}</div>

      <style jsx>{`
        .Container {
          position: absolute;
          z-index: 20;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
        .Modal {
          border-radius: 3px;
          box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.05);
          text-align: center;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 300;
          color: #334144;
          background: white;
        }
        .top1 {
          top: 361px;
        }
        .top2 {
          top: 150px;
        }
      `}</style>
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
