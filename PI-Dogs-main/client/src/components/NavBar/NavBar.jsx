import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { SearchBar } from '../SearchBar/SearchBar';
import './NavBar.css';
import { getDogs, getTemperaments, reset } from '../../actions';

export default function NavBar() {
    const [currentPage, setPage] = useState(1)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(getTemperaments())
    }
    return (
        <nav className="navbar navbar-dark">
            {/* <header> */}
            <button className='homebtn'>
                <Link exact to="/dogs" onClick={() => dispatch(getDogs())} >Home</Link>
            </button>
            <button className='createbreedbtn'>
                <Link to="/dog" onClick={handleClick} >Create Breed</Link>
            </button>
            <SearchBar setPage={setPage} className="SearchBAr" />

            {/* </header> */}
        </nav>
    )
}
