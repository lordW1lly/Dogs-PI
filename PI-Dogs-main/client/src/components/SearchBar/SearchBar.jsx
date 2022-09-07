import React, {useState} from "react";
import './SearchBar.css'

import { useDispatch} from "react-redux";
import { searchDog, reset } from "../../actions";

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
        dispatch(reset())
        
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