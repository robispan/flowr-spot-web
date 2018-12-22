import React, { Component } from 'react';

import classes from './Signup.module.css';
import Input from '../../components/UI/Input/Input';
import FormButton from '../../components/UI/FormButton/FormButton';

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
      console.log('submitted');
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
            <p className={classes.Title} >Create an Account</p>
            <form onSubmit={this.signupHandler} >
               {formElementsArray.map(formElement => (
                  <Input
                     key={formElement.id}
                     type={formElement.config.type}
                     value={formElement.config.value}
                     label={formElement.config.label}
                     fullWidth={formElement.config.fullWidth}
                     required={formElement.config.required} />
               ))}
               <FormButton label="Create Account" />
            </form>
         </div>
      );
   }
}

export default Signup;
