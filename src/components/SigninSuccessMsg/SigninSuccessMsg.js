import React from 'react';

import classes from './SigninSuccessMsg.module.css';
import Modal from '../../containers/Modal/Modal';
import ModalButton from '../UI/ModalButton/ModalButton';

const signinSuccessMsg = (props) => (
   <Modal topOffset="361px" >
      <div className={classes.SigninSuccessMsg}>
         <p className={classes.Message} >
            Congratulations! You have successfully logged into FlowrSpot!
         </p>
         <div className={classes.ButtonContainer}>
            <ModalButton label="OK" type="button" click={props.dismiss} />
            <ModalButton label="PROFILE" type="button" click={props.goToProfile} />
         </div>
      </div>
   </Modal>
);

export default signinSuccessMsg;
