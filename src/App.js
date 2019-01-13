import React, { Component } from 'react';
import { connect } from 'react-redux';

import Toolbar from './components/Toolbar/Toolbar';
import Banner from './components/Banner/Banner';
import FlowerGrid from './containers/FlowerGrid/FlowerGrid';
import Modal from './containers/Modal/Modal';
import * as actionCreators from './store/actions/actions';

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.tryAutoSignin(token);
    }
  }

  render() {
    return (
      <main className="App">
        <Toolbar />
        <Banner />
        <FlowerGrid />
        <Modal />

        <style jsx>{`
          .App {
            width: 1220px;
            min-height: 1300px;
            margin: 60px 40px;
            border: 1px solid #ddd;
            position: relative;
            
          }
            @media (min-width: 1320px) {
              .App {
              margin: 60px auto;
            }
          }
        `}</style>
      </main>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    tryAutoSignin: token => dispatch(actionCreators.tryAutoSignin(token))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
