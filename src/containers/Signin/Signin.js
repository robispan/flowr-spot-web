import React, { Component } from 'react';

import classes from './Signin.module.css';
import Form from '../../components/UI/Form/Form';
import Input from '../../components/UI/Input/Input';

class Signin extends Component {
   state = {
      signinForm: {
         email: {
            type: 'email',
            value: '',
            label: 'Email Address',
            fullWidth: true,
            required: false
         },
         password: {
            type: 'password',
            value: '',
            label: 'Password',
            fullWidth: true,
            required: false
         }
      }
   }

   signinHandler = (event) => {
      event.preventDefault();
      console.log('signin submitted');
   }

   render() {
      const formElementsArray = [];
      for (let key in this.state.signinForm) {
         formElementsArray.push({
            id: key,
            config: this.state.signinForm[key]
         });
      }

      return (
         <div className={classes.Signin} >
            <Form
               submit={this.signinHandler}
               title="Welcome Back"
               btnLabel="Login to your Account" >
               {formElementsArray.map(formElement => (
                  <Input
                     key={formElement.id}
                     type={formElement.config.type}
                     value={formElement.config.value}
                     label={formElement.config.label}
                     fullWidth={formElement.config.fullWidth}
                     required={formElement.config.required} />
               ))}
            </Form>
            <p className={classes.CancelMsg} >I don’t want to Login</p>
         </div>
      );
   }
}

export default Signin;
