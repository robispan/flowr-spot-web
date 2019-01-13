import React from 'react';

import classes from './XButton.module.css';

const xbutton = (props) => (
   <div className={classes.XButton} onClick={props.click} >
      <div className={classes.Btn}></div>
   </div>
);

export default xbutton;
