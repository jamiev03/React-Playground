import React from 'react';

const userInput = (props) => {
    const style = {
        border: '5px solid orange'
    }
    return <input type="text" 
    style={style}
    onChange={props.updateName} 
    value={props.currentName}/>
};

export default userInput;