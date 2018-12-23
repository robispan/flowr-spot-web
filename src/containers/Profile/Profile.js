import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Profile.module.css';
import profilePic from '../../assets/images/profile-holder.jpg';
import ModalButton from '../../components/UI/ModalButton/ModalButton';
import XButton from '../../components/UI/XButton/XButton';
import Modal from '../../components/UI/Modal/Modal';
import * as actionTypes from '../../store/actions';

class Profile extends Component {
   render() {
      return (
         <Modal topOffset="150px" >
            <div className={classes.Profile}>
               <div className={classes.Header}>
                  <p className={classes.Title} >{this.props.name}</p>
                  <p className={classes.Subtitle} >47 sightings</p>
                  <img src={profilePic} alt="profile pic" />
               </div>
               <div className={classes.Info}>
                  <p className={classes.Label} >First Name</p>
                  <p className={classes.Data} >{this.props.fname}</p>
                  <p className={classes.Label} >Last Name</p>
                  <p className={classes.Data} >{this.props.lname}</p>
                  <p className={classes.Label} >Date of Birth</p>
                  <p className={classes.Data} >May 20, 1980</p>
                  <p className={classes.Label} >Email Address</p>
                  <p className={classes.Data} >michael.berry@gmail.com</p>
               </div>
               <div className={classes.ButtonContainer}>
                  <ModalButton label="Logout" click={this.props.onLogout} />
               </div>
               <XButton click={this.props.onCancel} />
            </div>
         </Modal>
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
      onCancel: () => dispatch({ type: actionTypes.MODAL_CANCEL }),
      onLogout: () => dispatch({ type: actionTypes.LOGOUT })
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
