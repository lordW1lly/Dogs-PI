import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <header>
            <NavLink exact to="/dogs" >Home</NavLink>
            <NavLink to="/dog" >Create Breed</NavLink>
        </header>
    )
}
