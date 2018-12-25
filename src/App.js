import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import Main from './containers/Main/Main';

class App extends Component {
  render() {
    return (
      <Layout>
        <Main />
      </Layout>
    );
  }
}

export default App;
