import React from 'react';

import classes from './FormButton.module.css';

const formButton = (props) => (
   <input 
      type="submit"
      className={classes.FormButton}
      value={props.label} />
);

export default formButton;

