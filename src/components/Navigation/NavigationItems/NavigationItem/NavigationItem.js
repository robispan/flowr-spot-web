import React from 'react';

import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
   <li className={[classes.NavigationItem, classes[props.itemType]].join(' ')}>
      <a onClick={props.click}>
         {props.children}
      </a>
   </li>
);

export default navigationItem;
