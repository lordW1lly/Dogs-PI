import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {getDogs} from "../../actions";
//import { useDispatch } from "react-redux";
import  './HomeDogs.css'


export default function HomeDogs () {
    const dispatch = useDispatch()
    const dogs = useSelector(state => state.dogsLoaded)
    const [paginate, setPaginate] = useState(8);
    const [base, setBase] = useState(0);

    const nextPage = (event) => {
        setPaginate((prevValue) => prevValue + 8);
        setBase((prevBase) => prevBase + 8)
    };

    const previousPage = (event) => {
        
        setPaginate((prevValue) => prevValue -8);
        setBase((prevBase) => prevBase -8)
      };  
      
    useEffect(  () => {
     dispatch(getDogs())
     //console.log('entro useEffect')
    },[])
    

    return (
        <div>
            <p>holis soy /dogs </p>
            <button onClick={previousPage}>Previous Page</button>
            <button onClick={nextPage}>Next Page</button>
            {
                dogs.slice(base, paginate).map(dog => (
                    
                <div key={dog.id} className="individual">
                    <li className="dogInfo">
                        <div className="breedPicture">
                            <img src={dog.image} alt="no img found"></img>
                        </div>
                        
                        <h3>{dog.name}</h3>
                        
                        <p>{dog.temperament}</p>
                        <p>{dog.weight}</p> 
                    </li>
                    </div>
                    
                    ))
                    
                    }

        </div>
        
    )
}