import React from 'react';

import classes from './SignupSuccessMsg.module.css';
import ModalButton from '../../../../components/ModalButton/ModalButton';

const signupSuccessMsg = props => (
  <div className={classes.SignupSuccessMsg}>
    <p className={classes.Message}>
      Congratulations! You have successfully signed up for FlowrSpot!
    </p>
    <div className={classes.ButtonContainer}>
      <ModalButton label="OK" type="button" click={props.close} />
    </div>
  </div>
);

export default signupSuccessMsg;
