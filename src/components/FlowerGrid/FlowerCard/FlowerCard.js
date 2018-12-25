import React from 'react';

import classes from './FlowerCard.module.css';
import FavIcon from '../../UI/FavIcon/FavIcon';

const flowerCard = (props) => {
   const btnClassList = [classes.Button];
   if (props.fav) btnClassList.push(classes.Fav);

   return (
      <div className={classes.FlowerCard}>
         <img className={classes.ProfilePic} src={props.picUrl} alt={props.name} />
         {props.showFavBtn ? <FavIcon fav={props.fav} click={props.addFav} /> : null}
         <div className={classes.Content}>
            <p className={classes.Name}>{props.name}</p>
            <p className={classes.Latin}>{props.latin}</p>
            <div className={btnClassList.join(' ')}>{props.sightings} sightings</div>
         </div>
      </div>
   );
}

export default flowerCard;
