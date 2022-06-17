import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getDogs from "../../actions";
//import { useDispatch } from "react-redux";
import  './HomeDogs'


export default function HomeDogs () {
    const dispatch = useDispatch()
    const dogs = useSelector(state => state.dogsLoaded)
    
    useEffect( () => {
     dispatch(getDogs())
     //console.log('entro useEffect')
    },[dogs])

    return (
        <div>
            <h3>holis soy /dogs </h3>
            {
            dogs.map(dog => (
                <>
                <div key={dog.id} className="individual">
                    <div className="breedpicture">
                    <img src={dog.image}></img>
                    </div>
                    <p>name: {dog.name}</p>
                    <p>temperament:{dog.temperament}</p>
                    <p>weight:{dog.weight}</p> 
                    </div>
                    </>
                    ))
                    
                    }

        </div>
        
    )
}