import React from 'react';

import starIcon from '../../assets/images/pl-icon-star.svg';
import starIconWhite from '../../assets/images/pl-icon-star-white.svg';

const favIcon = props => {
  const classList = ["FavIcon"];
  if (props.fav) classList.push("Fav");

  return (
    <div className={classList.join(' ')} onClick={props.click}>
      <img src={props.fav ? starIconWhite : starIcon} alt="star icon" />

      <style jsx>{`
        .FavIcon {
          box-sizing: border-box;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
          background-color: white;
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 10;
          text-align: center;
          cursor: pointer;
        }
        .FavIcon img {
          width: 13px;
          height: 12px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .Fav {
          background-image: linear-gradient(to left, #ecbcb3, #eaa79e);
        }
      `}</style>
    </div>
  );
};

export default favIcon;
