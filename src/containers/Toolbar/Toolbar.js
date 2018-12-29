import React from 'react';
import { connect } from 'react-redux';

import classes from './Toolbar.module.css';
import Logo from '../../components/Logo/Logo';
import NavigationItems from '../../components/NavigationItems/NavigationItems';
import * as actionCreators from '../../store/actions/actions';

const toolbar = (props) => (
   <header className={classes.Toolbar}>
      <a href="/"><Logo /></a>
      <nav>
         <NavigationItems
            onSigninLink={props.viewSignin}
            onSignupLink={props.viewSignup}
            onProfileLink={props.viewProfile}
            loggedIn={props.auth}
            name={props.name} />
      </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(toolbar);