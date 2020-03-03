import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="useroutput">
            <p>This guys name is: {props.userName}</p>
            <p>Some other random text</p>
        </div>
    );
};

export default userOutput;