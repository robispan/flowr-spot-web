import React from 'react';

import ModalButton from '../../../components/ModalButton';

const signupSuccessMsg = props => (
  <div className="SignupSuccessMsg">
    <p className="Message">
      Congratulations! You have successfully signed up for FlowrSpot!
    </p>
    <div className="ButtonContainer">
      <ModalButton label="OK" type="button" click={props.close} />
    </div>

    <style jsx>{`
      .SignupSuccessMsg {
        padding: 40px 50px 30px;
      }
      .Message {
        margin: 0;
        margin-bottom: 35px;
      }
      .ButtonContainer {
        width: 110px;
        margin: 0 auto;
      }
    `}</style>
  </div>
);

export default signupSuccessMsg;
