import React from 'react';

import classes from './FavIcon.module.css';
import starIcon from '../../../assets/images/pl-icon-star.svg';
import starIconWhite from '../../../assets/images/pl-icon-star-white.svg';

const favIcon = (props) => {
   const classList = [classes.FavIcon];
   if (props.fav) classList.push(classes.Fav);

   return (
      <div className={classList.join(" ") } onClick={props.click} >
         <img 
            src={props.fav ? starIconWhite : starIcon} 
            alt="star icon" />
      </div>
   );
}

export default favIcon;
