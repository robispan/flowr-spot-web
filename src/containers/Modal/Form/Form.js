import React from 'react';

import ModalButton from '../../../components/ModalButton';

const form = props => (
  <div className="Form">
    <p className="Title">{props.title}</p>
    <form onSubmit={props.submit}>
      {props.children}
      <ModalButton label={props.btnLabel} type="submit" fullWidth />
    </form>

    <style jsx>{`
      .Form form {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .Title {
        height: 20px;
        font-size: 20px;
        font-weight: 500;
        line-height: 1;
        color: #334144;
        margin: 0;
        margin-bottom: 30px;
      }
    `}</style>
  </div>
);

export default form;
