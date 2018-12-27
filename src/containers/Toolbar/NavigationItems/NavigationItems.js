import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';
import * as actionTypes from '../../../store/actions/actionTypes';

class NavigationItems extends Component {
   render() {
      let userNavItems = (
         <>
            <NavigationItem type="Login" click={this.props.onSigninLink} >Login</NavigationItem>
            <NavigationItem type="Signup" click={this.props.onSignupLink} >New Account</NavigationItem>
         </>
      );
      if (this.props.auth) {
         userNavItems = (
            <NavigationItem type="User" click={this.props.onProfileLink} >{this.props.name}</NavigationItem>
         );
      }

      return (
         <ul className={classes.NavigationItems}>
            <NavigationItem>Flowers</NavigationItem>
            <NavigationItem>Latest Sightings</NavigationItem>
            <NavigationItem>Favourites</NavigationItem>
            {userNavItems}
         </ul>
      );
   }
}

const mapStateToProps = state => {
   return {
      auth: state.authToken,
      name: state.name
   };
};

const mapDispatchToProps = dispatch => {
   return {
      onSigninLink: () => dispatch({ type: actionTypes.VIEW_SIGNIN }),
      onSignupLink: () => dispatch({ type: actionTypes.VIEW_SIGNUP }),
      onProfileLink: () => dispatch({ type: actionTypes.VIEW_PROFILE })
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItems);
