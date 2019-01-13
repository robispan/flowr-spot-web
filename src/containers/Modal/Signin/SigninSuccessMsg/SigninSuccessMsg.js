import React from 'react';

import classes from './SigninSuccessMsg.module.css';
import ModalButton from '../../../../components/ModalButton/ModalButton';

const signinSuccessMsg = props => (
  <div className={classes.SigninSuccessMsg}>
    <p className={classes.Message}>
      Congratulations! You have successfully logged into FlowrSpot!
    </p>
    <div className={classes.ButtonContainer}>
      <ModalButton label="OK" type="button" click={props.close} />
      <ModalButton label="PROFILE" type="button" click={props.goToProfile} />
    </div>
  </div>
);

export default signinSuccessMsg;
