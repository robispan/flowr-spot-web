import React from 'react';
import { connect } from 'react-redux';

import background from '../assets/images/pl-hero.jpg';
import SearchBar from './SearchBar';

const banner = props => {
  let content = (
    <div className="Banner">
      <img src={background} alt="banner" />
      <div className="Content">
        <p className="Title">Discover flowers around you</p>
        <p className="Subtext">
          Explore between more than 8.427 sightings
        </p>
        <SearchBar />
      </div>

      <style jsx>{`
        .Banner {
          height: 500px;
          text-align: center;
          position: relative;
          margin-bottom: 70px;
        }
        .Content {
          width: 100%;
          position: absolute;
          top: 154px;
        }
        .Title {
          margin: 0;
          margin-bottom: 15px;
          height: 40px;
          font-size: 40px;
          font-weight: 300;
          line-height: 1;
          color: white;
        }
        .Subtext {
          margin: 0;
          margin-bottom: 45px;
          height: 17px;
          opacity: 0.7;
          font-size: 17px;
          font-weight: 300;
          line-height: 1;
          color: white;
        }
      `}</style>
    </div>
  );

  if (props.loggedIn) {
    if (props.modalState === 'profile') {
      content = <div style={{ marginTop: '30px' }} />;
    } else {
      content = (
        <div style={{ margin: '50px 0 30px' }}>
          <SearchBar />
        </div>
      );
    }
  }
  return content;
};

const mapStateToProps = state => {
  return {
    modalState: state.modalState,
    loggedIn: state.authToken !== null
  };
};

export default connect(mapStateToProps)(banner);
