import React from 'react';

import classes from './SigninSuccessMsg.module.css';
import Modal from '../UI/Modal/Modal';
import ModalButton from '../UI/ModalButton/ModalButton';

const signinSuccessMsg = (props) => (
   <Modal topOffset="1" close={props.close} >
      <div className={classes.SigninSuccessMsg}>
         <p className={classes.Message} >
            Congratulations! You have successfully logged into FlowrSpot!
         </p>
         <div className={classes.ButtonContainer}>
            <ModalButton label="OK" type="button" click={props.close} />
            <ModalButton label="PROFILE" type="button" click={props.goToProfile} />
         </div>
      </div>
   </Modal>
);

export default signinSuccessMsg;
