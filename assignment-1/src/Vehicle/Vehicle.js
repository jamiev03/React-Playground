//Creating components- in its simplest form is just a function that returns some JSX(html).

//we need to import React and our styling CSS
import React from 'react';
import './Vehicle.css'

const Vehicle = props => {
return (
    <div className="Vehicle">
        <p onClick={props.clicky}><span>Vehicle make:</span> {props.make} <span>Vehicle model:</span> {props.model} {props.thing}</p>
        <p>Somethign about something is cool and somethings about the other things is cool too!</p>
        <input type="text" onChange={props.inputChanged} value={props.make} />
    </div>
)
};

export default Vehicle;