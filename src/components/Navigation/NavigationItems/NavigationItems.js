import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import * as actionTypes from '../../../store/actions';

class NavigationItems extends Component {
   render() {
      return (
         <ul className={classes.NavigationItems}>
            <NavigationItem>Flowers</NavigationItem>
            <NavigationItem>Latest Sightings</NavigationItem>
            <NavigationItem>Favourites</NavigationItem>
            <NavigationItem type="Login" click={this.props.onSigninLink} >Login</NavigationItem>
            <NavigationItem type="Signup" click={this.props.onSignupLink} >New Account</NavigationItem>
         </ul>
      );
   }
}

const mapDispatchToProps = dispatch => {
   return {
      onSigninLink: () => dispatch({ type: actionTypes.VIEW_SIGNIN }),
      onSignupLink: () => dispatch({ type: actionTypes.VIEW_SIGNUP })
   };
};

export default connect(null, mapDispatchToProps)(NavigationItems);
