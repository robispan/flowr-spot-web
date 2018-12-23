import React, { Component } from 'react';
import axios from '../../axios';

import classes from './Signup.module.css';
import Form from '../../components/UI/Form/Form';
import Input from '../../components/UI/Input/Input';

class Signup extends Component {
   state = {
      signupForm: {
         fname: {
            type: 'text',
            value: '',
            label: 'First name',
            fullWidth: false,
            required: false
         },
         lname: {
            type: 'text',
            value: '',
            label: 'Last name',
            fullWidth: false,
            required: false
         },
         birthdate: {
            type: 'text',
            value: '',
            label: 'Date of Birth',
            fullWidth: true,
            required: false
         },
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

   signupHandler = (event) => {
      event.preventDefault();
      console.log('signup submitted');
   }

   render() {
      const formElementsArray = [];
      for (let key in this.state.signupForm) {
         formElementsArray.push({
            id: key,
            config: this.state.signupForm[key]
         });
      }

      return (
         <div className={classes.Signup} >
            <Form
               submit={this.signupHandler}
               title="Create an Account"
               btnLabel="Create Account" >
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
            <p className={classes.CancelMsg} >I don’t want to Register</p>
         </div>
      );
   }
}

export default Signup;
