import React from 'react';

import classes from './Spinner.module.css';
import Backdrop from '../Backdrop/Backdrop';

const spinner = () => (
   <div className={classes.Container}>
      <Backdrop />
      <div className={classes.Spinner}></div>
   </div>
);

export default spinner;
