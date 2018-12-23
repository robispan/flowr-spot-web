import React from 'react';

import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
   <li className={[classes.NavigationItem, classes[props.type]].join(' ')}
      onClick={props.click}>
      {props.children}
   </li>
);

export default navigationItem;
