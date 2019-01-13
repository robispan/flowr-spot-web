import React from 'react';
import { connect } from 'react-redux';

import classes from './Banner.module.css';
import background from '../../assets/images/pl-hero.jpg';
import SearchBar from '../SearchBar/SearchBar';

const banner = props => {
  let content = (
    <div className={classes.Banner}>
      <img src={background} alt="banner" />
      <div className={classes.Content}>
        <p className={classes.Title}>Discover flowers around you</p>
        <p className={classes.Subtext}>
          Explore between more than 8.427 sightings
        </p>
        <SearchBar />
      </div>
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
