import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>This guys name is: {props.userName}</p>
            <p>Some other random text</p>
        </div>
    );
};

export default userOutput;