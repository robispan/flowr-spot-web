import React from 'react';

import profilePic from '../../assets/images/menu-profile-holder.jpg';

const navigationItem = props => (
  <li
    className={['NavigationItem', props.type].join(' ')}
    onClick={props.click}
  >
    {props.children}
    {props.type === 'User' ? <img src={profilePic} alt="profile pic" /> : null}

    <style jsx>{`
      .NavigationItem {
        font-size: 14px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #949ea0;
        margin-right: 61px;
        display: flex;
        align-items: center;
        cursor: pointer;
      }
      .Login {
        color: #df9186;
        margin-right: 30px;
      }
      .Signup {
        box-sizing: border-box;
        padding: 12px 27px 14px;
        color: white;
        height: 40px;
        margin-right: 20px;
        border-radius: 50px;
        box-shadow: 0 15px 20px 0 rgba(234, 168, 159, 0.2);
        background-image: linear-gradient(to left, #ecbcb3, #eaa79e);
      }
      .User {
        margin-right: 20px;
      }
      .User img {
        margin-left: 20px;
      }
    `}</style>
  </li>
);

export default navigationItem;
