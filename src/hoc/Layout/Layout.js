import React from 'react';

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const layout = (props) => (
   <div className={classes.Layout}>
      <Toolbar />
      {props.children}
   </div>
);

export default layout;