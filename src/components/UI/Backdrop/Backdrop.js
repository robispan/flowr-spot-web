import React from 'react';
import { connect } from 'react-redux';

import classes from './Backdrop.module.css';
import * as actionTypes from '../../../store/actions/actionTypes';

const backdrop = (props) => (
   <div
      className={classes.Backdrop}
      onClick={props.onClick}>
   </div>
);

const mapDispatchToProps = dispatch => {
   return {
      onClick: () => dispatch({ type: actionTypes.MODAL_CANCEL })
   };
};

export default connect(null, mapDispatchToProps)(backdrop);
