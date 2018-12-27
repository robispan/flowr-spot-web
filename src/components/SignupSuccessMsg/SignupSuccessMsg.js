import React from 'react';

import classes from './SignupSuccessMsg.module.css';
import Modal from '../Modal/Modal';
import ModalButton from '../UI/ModalButton/ModalButton';

const signupSuccessMsg = (props) => (
   <Modal topOffset="361px" >
      <div className={classes.SignupSuccessMsg}>
         <p className={classes.Message} >
            Congratulations! You have successfully signed up for FlowrSpot!
         </p>
         <div className={classes.ButtonContainer}>
            <ModalButton label="OK" type="button" click={props.dismiss} />
         </div>
      </div>
   </Modal>
);

export default signupSuccessMsg;
