import React from 'react';

import classes from './FlowerCard.module.css';
import flowerImg from '../../../assets/images/pl-image.jpg';
import FavIcon from '../../UI/FavIcon/FavIcon';

const flowerCard = (props) => {
   const btnClassList = [classes.Button];
   if (props.fav) btnClassList.push(classes.Fav);

   return (
      <div className={classes.FlowerCard}>
         <img src={flowerImg} alt="flower" />
         <FavIcon fav={props.fav} />
         <div className={classes.Content}>
            <p className={classes.Name}>Balloon Flower</p>
            <p className={classes.Latin}>Platycodon grandiflorus</p>
            <div className={btnClassList.join(' ')}>127 sightings</div>
         </div>
      </div>
   );
}

export default flowerCard;
