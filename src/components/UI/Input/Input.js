import React, { Component } from 'react';

import classes from './Input.module.scss';

class Input extends Component {
   state = {
      focus: false
   }

   focusHandler = () => {
      this.setState({ focus: true });
   }

   focusOutHandler = () => {
      this.setState({ focus: false });
   }

   render() {
      const inputClasses = [classes.Input];
      if (this.props.fullWidth) {
         inputClasses.push(classes.Fullwidth);
      }

      const labelClasses = [classes.Label];
      if (this.state.focus || this.props.value) {
         labelClasses.push(classes.Move);
      }

      return (
         <div className={inputClasses.join(' ')}>
            <input
               onFocus={this.focusHandler}
               onBlur={this.focusOutHandler}
               onChange={this.props.inputChanged}
               type={this.props.type}
               required={this.props.required}
               value={this.props.value} />
            <p className={labelClasses.join(' ')} >{this.props.label}</p>
         </div>
      );
   }
}

export default Input;
