import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import LayoutStyle from '../../modules/Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = ( props ) => (
    <Auxillary>
        <Toolbar />
        <SideDrawer />
        <main className={LayoutStyle.content}>
            {props.children}
        </main>
    </Auxillary>
)

export default layout;