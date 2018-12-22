import React from 'react';

import classes from './Form.module.css';
import ModalButton from '../ModalButton/ModalButton';

const form = (props) => (
   <div className={classes.Form} >
      <p className={classes.Title} >{props.title}</p>
      <form onSubmit={props.submit} >
         {props.children}
         <ModalButton label={props.btnLabel} />
      </form>
   </div>
);

export default form;
