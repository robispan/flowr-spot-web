import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import Banner from './components/Banner/Banner';
import FlowerGrid from './components/FlowerGrid/FlowerGrid';
import Modal from './components/UI/Modal/Modal';

class App extends Component {
  render() {
    return (
      <Layout>
        <Banner />
        <FlowerGrid />
        <Modal>Modal content</Modal>
      </Layout>
    );
  }
}

export default App;
