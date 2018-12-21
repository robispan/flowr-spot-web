import React from 'react';

import classes from './Banner.module.css';
import background from '../../assets/images/pl-hero.jpg';
import Search from '../Search/Search';

const banner = () => (
   <div className={classes.Banner}>
      <img src={background} alt="banner" />
      <div className={classes.Content}>
         <p className={classes.Title}>Discover flowers around you</p>
         <p className={classes.Subtext}>Explore between more than 8.427 sightings</p>
         <Search />
      </div>
   </div>
);

export default banner;
