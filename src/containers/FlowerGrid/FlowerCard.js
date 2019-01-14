import React from 'react';

import FavIcon from './FavIcon';

const flowerCard = props => {
  const btnClassList = ['Button'];
  if (props.fav) btnClassList.push('Fav');

  return (
    <div className="FlowerCard">
      <img className="ProfilePic" src={props.picUrl} alt={props.name} />
      {props.showFavBtn ? (
        <FavIcon fav={props.fav} click={props.toggleFav} />
      ) : null}
      <div className="Content">
        <p className="Name">{props.name}</p>
        <p className="Latin">{props.latin}</p>
        <div className={btnClassList.join(' ')}>
          {props.sightings} sightings
        </div>
      </div>

      <style jsx>{`
        .FlowerCard {
          position: relative;
          width: 280px;
          height: 350px;
          margin: 10px;
          border-radius: 3px;
          overflow: hidden;
        }
        .FlowerCard::after {
          content: '';
          display: block;
          height: 100%;
          width: 100%;
          background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.7)
          );
          position: absolute;
          top: 0;
          left: 0;
        }
        .ProfilePic {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .Content {
          width: 100%;
          color: white;
          position: absolute;
          bottom: 20px;
          z-index: 2;
          text-align: center;
        }
        .Name {
          height: 15px;
          font-size: 20px;
          line-height: 0.75;
          margin: 0;
          margin-bottom: 7px;
        }
        .Latin {
          height: 12px;
          opacity: 0.7;
          font-size: 12px;
          font-style: italic;
          line-height: 1;
          margin: 0;
          margin-bottom: 20px;
        }
        .Button {
          height: 12px;
          font-size: 12px;
          line-height: 1;
          width: 103px;
          height: 30px;
          border-radius: 20px;
          box-shadow: 0 15px 20px 0 rgba(234, 168, 159, 0.2);
          background-color: rgba(0, 0, 0, 0.5);
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .Fav {
          background-image: linear-gradient(to left, #ecbcb3, #eaa79e);
        }
      `}</style>
    </div>
  );
};

export default flowerCard;
