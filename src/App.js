import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import Banner from './components/Banner/Banner';
import FlowerGrid from './components/FlowerGrid/FlowerGrid';

class App extends Component {
  render() {
    return (
      <Layout>
        <Banner />
        <FlowerGrid />
      </Layout>
    );
  }
}

export default App;
