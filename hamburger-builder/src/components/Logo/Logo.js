import React from 'react';
import burgerLogo from '../../assets/images/original.png';
import classes from '../../modules/Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="myBurger" />
    </div>
)

export default logo;