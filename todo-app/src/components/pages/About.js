import React from 'react';

function About() {
    return (
        <div style={aboutStyles}>
            <h1>About</h1>
            <p>This is a Todo list app that is part of a React crash course. </p>
        </div>
    )
}

const aboutStyles = {
    textAlign: 'center',
    paddingTop: '2rem'
}


export default About;