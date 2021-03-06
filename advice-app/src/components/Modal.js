import React from 'react';

const Modal = ( props ) => {
    return (
        <div className='modal'>
        <h3>"{props.text}"</h3>
        <button className="button" onClick={props.change}>
            <span>Please Advise</span>
        </button>

        </div>
    )
}

export default Modal;