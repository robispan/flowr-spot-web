import React from 'react';
import {connect} from 'react-redux';

import classes from './Modal.module.css';
import BackDrop from '../../components/UI/Backdrop/Backdrop';
import * as actionCreators from '../../store/actions/actions';

const modal = (props) => (
   <>
      <BackDrop click={props.closeModal} />
      <div style={{ "top": props.topOffset }} className={classes.Modal}>
         {props.children}
      </div>
   </>
);

const mapDispatchToProps = dispatch => {
   return {
      closeModal: () => dispatch(actionCreators.closeModal())
   };
};

export default connect(null, mapDispatchToProps)(modal);
