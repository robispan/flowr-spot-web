import React, { Component } from 'react';
import axios from '../../axios';
import { connect } from 'react-redux';

import classes from './Signin.module.css';
import Form from '../../components/UI/Form/Form';
import Input from '../../components/UI/Input/Input';
import Modal from '../../components/UI/Modal/Modal';
import * as actionTypes from '../../store/actions';

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
            this.signinSuccessHandler(response.data.auth_token);
         })
         .catch(error => {
            console.log(error);
         });
   }

   signinSuccessHandler = (token) => {
      axios.get('/users/me',
         {
            headers: {
               "Authorization": token
            }
         })
         .then(response => {
            const data = {
               token: token,
               userData: response.data.user
            };

            this.props.onSigninSuccess(data);
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
         <Modal topOffset="361px" >
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
         </Modal>
      );
   }
}

const mapDispatchToProps = dispatch => {
   return {
      onSigninSuccess: (data) => dispatch({ type: actionTypes.SIGNIN_SUCCESS, payload: data })
   };
};

export default connect(null, mapDispatchToProps)(Signin);
