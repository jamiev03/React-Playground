//Creating components- in its simplest form is just a function that returns some JSX(html).

//we need to import React and our styling CSS
import React from 'react';
import './Person.css'
import Radium from 'radium';

const person = props => {
return (
    <div className="Person">
        <p onClick={props.clicky}>I'm {props.name} Person and I am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
    </div>
)
};

export default Radium(person);

