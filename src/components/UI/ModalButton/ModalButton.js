import React from 'react';

import classes from './ModalButton.module.css';

const modalButton = (props) => (
   <button 
      type="submit"
      className={classes.ModalButton}>
      {props.label}
   </button>
);

export default modalButton;

