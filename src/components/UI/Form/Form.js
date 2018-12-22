import React from 'react';

import classes from './Form.module.css';
import FormButton from '../FormButton/FormButton';

const form = (props) => (
   <div className={classes.Form} >
      <p className={classes.Title} >{props.title}</p>
      <form onSubmit={props.submit} >
         {props.children}
         <FormButton label={props.btnLabel} />
      </form>
   </div>
);

export default form;
