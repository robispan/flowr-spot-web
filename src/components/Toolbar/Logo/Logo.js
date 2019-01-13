import React from 'react';

import classes from './Logo.module.css';
import logoSvg from '../../../assets/images/logo.svg';

const logo = () => (
   <img className={classes.Logo} src={logoSvg} alt="logo" />
);

export default logo;
