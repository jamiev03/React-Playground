import React from 'react';
import classes from '../../../modules/ModalStyles.module.css';
import Auxillary from '../../../hoc/Auxillary';
import Backdrop from '../../../components/UI/Modal/Backdrop/Backdrop';

const modal = (props) => (
    <Auxillary>
        <Backdrop show={props.show} clicked={props.modalClose}/>
    <div 
    className={classes.Modal}
    style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
    }}>
        {props.children}
    </div>
    </Auxillary>
);

 export default modal;

