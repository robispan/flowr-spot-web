import React from 'react';

import classes from './NavigationItem.module.css';
import profilePic from '../../../../assets/images/menu-profile-holder.jpg';

const navigationItem = (props) => (
   <li className={[classes.NavigationItem, classes[props.type]].join(' ')}
      onClick={props.click}>
      {props.children}
      {props.type === "User" ? <img src={profilePic} alt="profile pic" /> : null}
   </li>
);

export default navigationItem;
