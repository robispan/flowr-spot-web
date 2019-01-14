import React from 'react';

import logoSvg from '../../assets/images/logo.svg';

const logo = () => (
  <div>
    <img className="Logo" src={logoSvg} alt="logo" />

    <style jsx>{`
      .Logo {
        width: 151px;
        height: 27px;
        object-fit: contain;
        margin: 28px 0 25px 20px;
      }
    `}</style>
  </div>
);

export default logo;
