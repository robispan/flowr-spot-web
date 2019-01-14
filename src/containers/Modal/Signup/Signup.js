import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from '../Form/Form';
import Input from '../Form/Input';
import * as actionCreators from '../../../store/actions/actions';

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
  };

  signupHandler = event => {
    event.preventDefault();
    const signupData = {
      first_name: this.state.signupForm.fname.value,
      last_name: this.state.signupForm.lname.value,
      date_of_birth: this.state.signupForm.birthdate.value,
      password: this.state.signupForm.password.value,
      email: this.state.signupForm.email.value
    };
    this.props.onSignup(signupData);
  };

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
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.signupForm) {
      formElementsArray.push({
        id: key,
        config: this.state.signupForm[key]
      });
    }

    return (
      <div className="Signup">
        <Form
          submit={this.signupHandler}
          title="Create an Account"
          btnLabel="Create Account"
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
        <p onClick={this.props.close} className="CancelMsg">
          I don’t want to Register
        </p>

        <style jsx>{`
          .Signup {
            width: 440px;
            padding: 30px;
            box-sizing: border-box;
          }
          .CancelMsg {
            height: 13px;
            width: 380px;
            opacity: 0.5;
            font-size: 13px;
            line-height: 1;
            text-align: center;
            color: white;
            margin-top: 50px;
            position: absolute;
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignup: signupData => dispatch(actionCreators.signup(signupData))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Signup);
