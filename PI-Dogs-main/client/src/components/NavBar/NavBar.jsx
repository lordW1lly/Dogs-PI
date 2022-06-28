import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../SearchBar/SearchBar';
import './NavBar.css';

export default function NavBar() {
    const [currentPage, setPage] = useState(1)
    return (
        <nav className="navbar navbar-dark">
            {/* <header> */}
            <button className='homebtn'>
                <Link exact to="/dogs" >Home</Link>
                </button>
            <button className='createbreedbtn'>
                <Link to="/dog" >Create Breed</Link>
                </button>
            <SearchBar  setPage={setPage} className="SearchBAr"/>    

        {/* </header> */}
        </nav>
    )
}
