import React from 'react';

import classes from './SignupSuccessMsg.module.css';
import Modal from '../UI/Modal/Modal';
import ModalButton from '../UI/ModalButton/ModalButton';

const signupSuccessMsg = (props) => (
   <Modal topOffset="1" close={props.close} >
      <div className={classes.SignupSuccessMsg}>
         <p className={classes.Message} >
            Congratulations! You have successfully signed up for FlowrSpot!
         </p>
         <div className={classes.ButtonContainer}>
            <ModalButton label="OK" type="button" click={props.close} />
         </div>
      </div>
   </Modal>
);

export default signupSuccessMsg;
