//Creating components- in its simplest form is just a function that returns some JSX(html).

//we need to import React and our styling CSS
import React from 'react';
// import './Person.css'
import styled from 'styled-components';

const StyledDiv = styled.div`
        background-color: #c1c1c1;
        width: 60%;
        margin: 16px auto;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(156, 156, 156, 0.3);
        padding: 16px;
        text-align: center;

        @media (min-width: 500px) {
            width: 450px
        }
`;

const person = props => {
return (
    // <div className="Person" style={style}>
     <StyledDiv>
        <p onClick={props.clicky}>I'm {props.name} Person and I am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
     </StyledDiv>
    );
};

export default person;

