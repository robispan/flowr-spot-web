import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
   <ul className={classes.NavigationItems}>
      <NavigationItem>Flowers</NavigationItem>
      <NavigationItem>Latest Sightings</NavigationItem>
      <NavigationItem>Favourites</NavigationItem>
      <NavigationItem itemType="Login">Login</NavigationItem>
      <NavigationItem itemType="Signup">New Account</NavigationItem>
   </ul>
);

export default navigationItems;
