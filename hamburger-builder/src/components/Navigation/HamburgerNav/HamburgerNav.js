import React from 'react';
import Auxillary from '../../../hoc/Auxillary';
import classes from '../../../modules/HamburgerNav.module.css';

const HamburgerNav = (props) => {
    return (
        <Auxillary>
            <div className={classes.HamburgerNav} onClick={props.clicked}>
            <div className={classes.top}></div>
            <div className={classes.middle}></div>
            <div className={classes.bottom}></div>
            </div>
        </Auxillary>
    );
};

export default HamburgerNav;