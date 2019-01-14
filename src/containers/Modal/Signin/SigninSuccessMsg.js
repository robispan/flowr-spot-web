import React from 'react';

import ModalButton from '../../../components/ModalButton';

const signinSuccessMsg = props => (
  <div className="SigninSuccessMsg">
    <p className="Message">
      Congratulations! You have successfully logged into FlowrSpot!
    </p>
    <div className="ButtonContainer">
      <ModalButton label="OK" type="button" click={props.close} />
      <ModalButton label="PROFILE" type="button" click={props.goToProfile} />
    </div>

    <style jsx>{`
      .SigninSuccessMsg {
        padding: 40px 50px 30px;
      }
      .Message {
        margin: 0;
        margin-bottom: 35px;
      }
      .ButtonContainer {
        width: 70%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </div>
);

export default signinSuccessMsg;
