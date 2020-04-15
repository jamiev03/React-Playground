import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary';
import LayoutStyle from '../../modules/Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    render() {
        return (
            <Auxillary>
                <Toolbar />
                <SideDrawer />
                <main className={LayoutStyle.content}>
                    {this.props.children}
                </main>
            </Auxillary>
        )
    } 
}

export default Layout;