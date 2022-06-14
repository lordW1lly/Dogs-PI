import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <header>
            <button>
                <Link exact to="/dogs" >Home</Link>
                </button>
            <button>
                <Link to="/dog" >Create Breed</Link>
                </button>    

        </header>
    )
}
