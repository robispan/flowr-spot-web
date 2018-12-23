import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import Banner from './components/Banner/Banner';
import FlowerGrid from './components/FlowerGrid/FlowerGrid';
import Modal from './components/UI/Modal/Modal';
import Signup from './containers/Signup/Signup';
import Signin from './containers/Signin/Signin';
import Profile from './containers/Profile/Profile';

class App extends Component {
  render() {
    return (
      <Layout>
        <Banner />
        <FlowerGrid />
        <Modal topOffset="150px">
          <Signup />
        </Modal>
      </Layout>
    );
  }
}

export default App;
