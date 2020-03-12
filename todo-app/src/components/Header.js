import React from 'react';

function Header() {
    return (
        <header style={headerStyles}>
            <h1>Todo List</h1>
        </header>
    )
}

const headerStyles = {
    background: '#333',
    color: 'white',
    textAlign: 'center',
    fontWeight: '900',
    padding: '1rem'
}

export default Header