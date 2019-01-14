import React from 'react';

const xbutton = props => (
  <div className="XButton" onClick={props.click}>
    <div className="Btn" />

    <style jsx>{`
      .XButton {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 17px;
        right: 17px;
        cursor: pointer;
        display: flex;
        align-items: center;
      }
      .Btn,
      .Btn::before {
        width: 20px;
        height: 1px;
        transform: rotate(45deg);
        background-color: #949ea0;
      }
      .Btn::before {
        content: '';
        display: block;
        transform: rotate(90deg);
      }
    `}</style>
  </div>
);

export default xbutton;
