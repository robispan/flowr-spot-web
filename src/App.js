import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import Banner from './components/Banner/Banner';
import FlowerGrid from './components/FlowerGrid/FlowerGrid';
import Signup from './containers/Signup/Signup';
import Signin from './containers/Signin/Signin';
import Profile from './containers/Profile/Profile';

class App extends Component {
  render() {
    let popup;
    switch(this.props.modal) {
      case "signup":
        popup = (
          <Signup />
        );
        break;
      case "signin":
        popup = (
          <Signin />
        );
        break;
      case "profile":
        popup = (
          <Profile />
        );
        break;
      default: 
          popup = null;
    }

    return (
      <Layout>
        <Banner />
        <FlowerGrid />
        {popup}
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    modal: state.modalState
  };
}

export default connect(mapStateToProps)(App);
