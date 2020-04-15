import React from 'react';
import classes from '../../../modules/NavigationItems.module.css';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <li className={classes.NavigationItem}><a
         href={props.link}
         className={props.active ? classes.active : null}>Burger Builder</a></li>
         <li className={classes.NavigationItem}><a
         href={props.link}
         className={props.active ? classes.active : null}>Checkout</a></li>
    </ul>
);

export default navigationItems;