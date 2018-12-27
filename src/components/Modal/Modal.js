import React, { Component } from 'react';

import classes from './Modal.module.css';
import BackDrop from '../UI/Backdrop/Backdrop';

class Modal extends Component {
   state = {
      closed: false
   }

   modalCloseHandler = () => {
      this.setState({ closed: true });
   }

   render() {
      return this.state.closed ? null : (
         <>
            <BackDrop click={this.modalCloseHandler} />
            <div style={{ "top": this.props.topOffset }} className={classes.Modal}>
               {this.props.children}
            </div>
         </>
      );
   }
}

export default Modal;
