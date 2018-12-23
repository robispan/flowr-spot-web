import React from 'react';

import classes from './Modal.module.css';
import BackDrop from '../Backdrop/Backdrop';

const modal = (props) => (
   <>
      <BackDrop />
      <div style={{ "top": props.topOffset }} className={classes.Modal}>
         {props.children}
      </div>
   </>
);

export default modal;
