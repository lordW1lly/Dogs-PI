import React, {useState} from "react";
import './SearchBar.css'
import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchDog } from "../../actions";

export  function SearchBar({setPage}) {

    const dispatch = useDispatch();
    const [name, setName] = useState()
    const handleInput = (e) => {
        setName(e.target.value)
        e.preventDefault()
        setPage(1)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchDog(name))
        setName("")
        setPage(1)
    }

    return(
        <div className="SearchBar">
            <p> Soy SearchBar</p>
            <form
            onSubmit={(e) => {
                e.preventDefault();
                dispatch(searchDog(name))

            }}>
                <input
                type="text"
                placeholder="Breed.."
                value={name}
                onChange={handleInput}
                />
                <button type="submit" className="searchBtn" onClick={handleSubmit}></button>
                {/* <input type="submit" value="Search"/> */}
                
            </form>
            

        </div>

    )
}