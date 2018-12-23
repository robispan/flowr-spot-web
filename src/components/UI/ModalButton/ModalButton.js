import React from 'react';

import classes from './ModalButton.module.css';

const modalButton = (props) =>  (
      <button
         className={[classes.ModalButton, props.fullWidth ? classes.FullWidth : null].join(' ')}
         type={props.type}
         onClick={props.click} >
         {props.label}
      </button>
   );

export default modalButton;

