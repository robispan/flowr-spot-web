import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = (props) => {
   let userNavItems = (
      <>
         <NavigationItem type="Login" click={props.onSigninLink} >Login</NavigationItem>
         <NavigationItem type="Signup" click={props.onSignupLink} >New Account</NavigationItem>
      </>
   );
   if (props.loggedIn) {
      userNavItems = (
         <NavigationItem type="User" click={props.onProfileLink} >{props.name}</NavigationItem>
      );
   }

   return (
      <ul className={classes.NavigationItems}>
         <NavigationItem>Flowers</NavigationItem>
         <NavigationItem>Latest Sightings</NavigationItem>
         <NavigationItem>Favorites</NavigationItem>
         {userNavItems}
      </ul>
   );
}

export default navigationItems;
