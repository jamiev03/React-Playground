import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary';
import LayoutStyle from '../../modules/Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    
    render() {
        return (
            <Auxillary>
                <Toolbar />
                <SideDrawer 
                closed={this.sideDrawerClosedHandler}
                open={this.state.showSideDrawer}/>
                <main className={LayoutStyle.content}>
                    {this.props.children}
                </main>
            </Auxillary>
        )
    } 
}

export default Layout;