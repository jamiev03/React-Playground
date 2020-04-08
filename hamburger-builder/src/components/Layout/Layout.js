import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import LayoutStyle from '../../modules/Layout.module.css';

const layout = ( props ) => (
    <Auxillary>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main className={LayoutStyle.content}>
            {props.children}
        </main>
    </Auxillary>
)

export default layout;