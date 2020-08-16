import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <br />
            <NavLink id="navBar" to='/'>Home</NavLink>
            <NavLink id="navBar" to='/adventures'>Adventure Library</NavLink>
            <NavLink id="navBar" to='/adventures/new'>New Adventure</NavLink>
            <NavLink id="navBar" to='/adventures/signin'>Sign In</NavLink>
        </div>
        )
}

export default Navbar