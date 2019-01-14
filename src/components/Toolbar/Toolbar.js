import React from 'react';
import { connect } from 'react-redux';

import Logo from './Logo';
import NavigationItems from './NavigationItems';
import * as actionCreators from '../../store/actions/actions';

const toolbar = props => (
  <header className="Toolbar">
    <a href="/">
      <Logo />
    </a>
    <nav>
      <NavigationItems
        onSigninLink={props.viewSignin}
        onSignupLink={props.viewSignup}
        onProfileLink={props.viewProfile}
        loggedIn={props.auth}
        name={props.name}
      />
    </nav>

    <style jsx>{`
      .Toolbar {
        height: 80px;
        box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.05);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `}</style>
  </header>
);

const mapStateToProps = state => {
  return {
    auth: state.authToken !== null,
    name: state.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    viewSignin: () => dispatch(actionCreators.viewSignin()),
    viewSignup: () => dispatch(actionCreators.viewSignup()),
    viewProfile: () => dispatch(actionCreators.viewProfile())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toolbar);
