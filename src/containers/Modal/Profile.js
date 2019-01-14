import React, { Component } from 'react';
import { connect } from 'react-redux';

import profilePic from '../../assets/images/profile-holder.jpg';
import ModalButton from '../../components/ModalButton';
import XButton from '../../components/XButton';
import * as actionCreators from '../../store/actions/actions';

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <div className="Header">
          <p className="Title">{this.props.name}</p>
          <p className="Subtitle">47 sightings</p>
          <img src={profilePic} alt="profile pic" />
        </div>
        <div className="Info">
          <p className="Label">First Name</p>
          <p className="Data">{this.props.fname}</p>
          <p className="Label">Last Name</p>
          <p className="Data">{this.props.lname}</p>
          <p className="Label">Date of Birth</p>
          <p className="Data">May 20, 1980</p>
          <p className="Label">Email Address</p>
          <p className="Data">michael.berry@gmail.com</p>
        </div>
        <div className="ButtonContainer">
          <ModalButton label="Logout" click={this.props.onLogout} />
        </div>
        <XButton click={this.props.onModalClose} />

        <style jsx>{`
          .Profile {
            width: 600px;
            padding: 60px 111px 59px;
            box-sizing: border-box;
            text-align: left;
          }
          .Header {
            text-align: left;
            margin-left: 110px;
          }
          .Header img {
            position: absolute;
            top: 60px;
            left: 111px;
          }
          .Title {
            font-size: 25px;
            font-weight: 300;
            line-height: 1;
            color: #334144;
            margin-top: 18px;
            margin-bottom: 6px;
          }
          .Subtitle {
            margin: 0;
            font-size: 13px;
            line-height: 1;
            color: #949ea0;
          }
          .Info {
            margin: 59px 0 71px;
          }
          .Label {
            font-size: 10px;
            line-height: 1;
            color: #949ea0;
            margin: 0;
            margin-bottom: 16px;
          }
          .Data {
            font-size: 18px;
            line-height: 0.72;
            color: #334144;
            margin: 0;
            margin-bottom: 31px;
          }
          .ButtonContainer {
            width: 150px;
            margin: 61px auto 0;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    fname: state.fname,
    lname: state.lname
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onModalClose: () => dispatch(actionCreators.closeModal()),
    onLogout: () => dispatch(actionCreators.logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
