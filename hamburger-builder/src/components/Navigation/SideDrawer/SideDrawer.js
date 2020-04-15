import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from '../../../modules/SideDrawer.module.css';
import Backdrop from '../../UI/Modal/Backdrop/Backdrop';
import Auxillary from '../../../hoc/Auxillary';

const sideDrawer = (props) => {
    return (
        <Auxillary>
            <Backdrop show />
                <div className={classes.SideDrawer}>
                    <div className={classes.Logo}><Logo /></div>
                    <nav>
                        <NavigationItems />
                    </nav>
                </div>
        </Auxillary>
    );
};

export default sideDrawer;