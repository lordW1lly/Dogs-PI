import React, { useState } from "react";
import './SearchBar.css'

import { useDispatch } from "react-redux";
import { searchDog, reset } from "../../actions";

export function SearchBar() {

    const dispatch = useDispatch();
    const [name, setName] = useState()
    const handleInput = (e) => {
        setName(e.target.value)
        e.preventDefault()

    }
    const handleSubmitSB = (e) => {
        e.preventDefault()
        dispatch(reset())

        dispatch(searchDog(name))
        setName("")

    }

    return (
        <div className="SearchBar container-fluid" role='search'>

            <form class="d-flex"
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(searchDog(name))

                }}>
                <input
                    type="search"
                    placeholder="Breed.."
                    class="form-control me-2"
                    value={name}
                    onChange={handleInput}
                />
                <button class="btn btn-outline-success btnsubmit" type="submit" onClick={handleSubmitSB}>Search</button>
                {/* <input type="submit" value="Search"/> */}

            </form>


        </div>

    )
}