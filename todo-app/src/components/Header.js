import React from 'react';
import { Link } from 'react-router-dom'; //import 'Link' from react router

function Header() {
    return (
        <header style={headerStyles}>
            <h1>Todo List</h1>
            <Link style={linkStyles} to="/">Home</Link> | <Link style={linkStyles} to="/about">About</Link>
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

const linkStyles = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header