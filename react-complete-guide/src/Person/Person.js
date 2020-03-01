//Creating components- in its simplest form is just a function that returns some JSX(html).

//we need to import React
import React from 'react';

const person = props => {
return (
    <div>
        <p onClick={props.clicky}>I'm a {props.name} Person and I am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.inputChanged} value={props.name} />
    </div>
)
};

export default person;

