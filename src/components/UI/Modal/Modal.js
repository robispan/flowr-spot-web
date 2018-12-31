import React from 'react';

import classes from './Modal.module.css';
import BackDrop from '../Backdrop/Backdrop';

const modal = (props) => {

   const modalClasses = [classes["Modal"], classes["top" + props.topOffset]]

   return (
      <div className={classes.Container}>
         <BackDrop click={props.close} />
         <div className={modalClasses.join(' ')}>
            {props.children}
         </div>
      </div>
   );
}

export default modal;
