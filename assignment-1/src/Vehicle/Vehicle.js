//Creating components- in its simplest form is just a function that returns some JSX(html).

//we need to import React and our styling CSS
import React from 'react';
import './Vehicle.css'

const vehicle = props => {
return (
    <div className="Vehicle">
        <p onClick={props.clicky}>I'm a {props.name} Person and I am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.inputChanged} value={props.name} />
    </div>
)
};

export default vehicle;