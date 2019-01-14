import React from 'react';

const modalButton = props => (
  <button
    className={[
      "ModalButton",
      props.fullWidth ? "FullWidth" : null
    ].join(' ')}
    type={props.type}
    onClick={props.click}
  >
    {props.label}

    <style jsx>{`
      .ModalButton {
        height: 50px;
        padding: 0 30px;
        margin: 10px auto 0;
        border-radius: 3px;
        box-shadow: 0 15px 20px 0 rgba(234, 168, 159, 0.2);
        background-image: linear-gradient(to left, #ecbcb3, #eaa79e);
        border: none;
        outline: none;
        font-family: inherit;
        font-size: 14px;
        font-weight: 500;
        color: white;
        cursor: pointer;
      }
      .FullWidth {
        width: 100%;
        margin: 10px 0 0;
      }
    `}</style>
  </button>
);

export default modalButton;
