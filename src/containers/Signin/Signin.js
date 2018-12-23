import React, { Component } from 'react';
import axios from '../../axios';

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
      const signinData = {
         password: this.state.signinForm.password.value,
         email: this.state.signinForm.email.value
      };
      axios.post('/users/login', signinData)
         .then(response => {
            console.log(response);
         })
         .catch(error => {
            console.log(error);
         });
   }

   inputChangedHandler = (event, inputIdentifier) => {
      const updatedSigninForm = {
         ...this.state.signinForm
      };
      const updatedFormElement = {
         ...updatedSigninForm[inputIdentifier]
      };
      updatedFormElement.value = event.target.value;
      updatedSigninForm[inputIdentifier] = updatedFormElement;
      this.setState({ signinForm: updatedSigninForm });
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
                     label={formElement.config.label}
                     fullWidth={formElement.config.fullWidth}
                     required={formElement.config.required}
                     value={formElement.config.value}
                     inputChanged={(e) => this.inputChangedHandler(e, formElement.id)} />
               ))}
            </Form>
            <p className={classes.CancelMsg} >I don’t want to Login</p>
         </div>
      );
   }
}

export default Signin;
