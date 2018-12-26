import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import Main from './containers/Main/Main';
import * as actionCreators from './store/actions/actions';

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.tryAutoSignin(token);
    }
  }

  render() {
    return (
      <Layout>
        <Main />
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    tryAutoSignin: (token) => dispatch(actionCreators.tryAutoSignin(token))
  }
}

export default connect(null, mapDispatchToProps)(App);
