import React from 'react';
import classes from '../../../modules/Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import HamburgerNav from '../../Navigation/HamburgerNav/HamburgerNav';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <HamburgerNav />
        <div className={classes.Logo}><Logo /></div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;