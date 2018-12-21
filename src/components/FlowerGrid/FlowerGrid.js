import React from 'react';

import classes from './FlowerGrid.module.css';
import FlowerCard from './FlowerCard/FlowerCard';

const flowergrid = () => (
   <div className={classes.FlowerGrid}>
      <FlowerCard />
      <FlowerCard />
      <FlowerCard fav />
      <FlowerCard />
      <FlowerCard />
      <FlowerCard fav />
      <FlowerCard />
      <FlowerCard />
   </div>
);

export default flowergrid;
