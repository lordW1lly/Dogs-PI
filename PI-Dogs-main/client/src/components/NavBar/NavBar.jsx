import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../SearchBar/SearchBar';

export default function NavBar() {
    return (
        <nav>
            {/* <header> */}
            <button>
                <Link exact to="/dogs" >Home</Link>
                </button>
            <button>
                <Link to="/dog" >Create Breed</Link>
                </button>
            <SearchBar/>    

        {/* </header> */}
        </nav>
    )
}
