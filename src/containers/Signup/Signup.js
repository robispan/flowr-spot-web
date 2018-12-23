import React, { Component } from 'react';
import axios from '../../axios';

import classes from './Signup.module.css';
import Form from '../../components/UI/Form/Form';
import Input from '../../components/UI/Input/Input';
import Modal from '../../components/UI/Modal/Modal';

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
      const signupData = {
         first_name: this.state.signupForm.fname.value,
         last_name: this.state.signupForm.lname.value,
         date_of_birth: this.state.signupForm.birthdate.value,
         password: this.state.signupForm.password.value,
         email: this.state.signupForm.email.value
      };
      axios.post('/users/register', signupData)
         .then(response => {
            console.log(response);
         })
         .catch(error => {
            console.log(error);
         });
   }

   inputChangedHandler = (event, inputIdentifier) => {
      const updatedSignupForm = {
         ...this.state.signupForm
      };
      const updatedFormElement = {
         ...updatedSignupForm[inputIdentifier]
      };
      updatedFormElement.value = event.target.value;
      updatedSignupForm[inputIdentifier] = updatedFormElement;
      this.setState({ signupForm: updatedSignupForm });
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
         <Modal topOffset="361px" >
            <div className={classes.Signup} >
               <Form
                  submit={this.signupHandler}
                  title="Create an Account"
                  btnLabel="Create Account" >
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
               <p className={classes.CancelMsg} >I don’t want to Register</p>
            </div>
         </Modal>
      );
   }
}

export default Signup;
