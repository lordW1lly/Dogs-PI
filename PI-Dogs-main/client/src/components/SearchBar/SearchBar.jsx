import React, {useState} from "react";
import './SearchBar.css'

import { useDispatch} from "react-redux";
import { searchDog, reset } from "../../actions";

export  function SearchBar() {

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

    return(
        <div className="SearchBar">
            
            <form class="d-flex"
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
                <button  class="btn btn-outline-success" type="submit" onClick={handleSubmitSB}>btn de Schb</button>
                {/* <input type="submit" value="Search"/> */}
                
            </form>
            

        </div>

    )
}