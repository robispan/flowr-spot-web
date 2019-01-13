import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Signin.module.css';
import Form from '../Form/Form';
import Input from '../Form/Input/Input';
import * as actionCreators from '../../../store/actions/actions';

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
  };

  signinHandler = event => {
    event.preventDefault();
    const signinData = {
      password: this.state.signinForm.password.value,
      email: this.state.signinForm.email.value
    };
    this.props.onSignin(signinData);
  };

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
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.signinForm) {
      formElementsArray.push({
        id: key,
        config: this.state.signinForm[key]
      });
    }

    return (
      <div className={classes.Signin}>
        <Form
          submit={this.signinHandler}
          title="Welcome Back"
          btnLabel="Login to your Account"
        >
          {formElementsArray.map(formElement => (
            <Input
              key={formElement.id}
              type={formElement.config.type}
              label={formElement.config.label}
              fullWidth={formElement.config.fullWidth}
              required={formElement.config.required}
              value={formElement.config.value}
              inputChanged={e => this.inputChangedHandler(e, formElement.id)}
            />
          ))}
        </Form>
        <p className={classes.CancelMsg} onClick={this.props.onModalClose}>
          I don’t want to Login
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignin: data => dispatch(actionCreators.signin(data)),
    onModalClose: () => dispatch(actionCreators.closeModal())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Signin);
