import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import LayoutStyle from '../../modules/Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const layout = ( props ) => (
    <Auxillary>
        <Toolbar />
        <main className={LayoutStyle.content}>
            {props.children}
        </main>
    </Auxillary>
)

export default layout;