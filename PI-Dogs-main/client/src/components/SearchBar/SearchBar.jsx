import React, {useState} from "react";
import './SearchBar.css'
import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchDog } from "../../actions";

export  function SearchBar() {

    const dispatch = useDispatch();
    const [name, setName] = useState()

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
                onChange={ e => setName(e.target.value)}
                />
                <input type="submit" value="Search"/>
                
            </form>
            

        </div>

    )
}