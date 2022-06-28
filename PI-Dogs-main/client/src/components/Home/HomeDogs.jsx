import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {getDogs, reset, getTemperaments, filterByTemps,
     orderNameZA, orderNameAZ, orderWeightDESC, orderWeightASC, filterByOrigin} from "../../actions";

import  './HomeDogs.css'


export default function HomeDogs () {

    const dispatch = useDispatch()
    const dogs = useSelector(state => state.dogsLoaded)
    const temperaments = useSelector(state => state.temperaments)
    const [paginate, setPaginate] = useState(8);
    const [base, setBase] = useState(0);
    const [counter, setCounter] = useState(1)
    const [dogPages] = useState(8)
    
    const lastDog = counter * dogPages
    const firstDog = lastDog - dogPages
    const indexPages = Math.ceil(dogs.length / dogPages)
    

    const nextPage = () => {
        
        setPaginate((prevValue) => prevValue + 8);
        setBase((prevBase) => prevBase + 8)
    };
    console.log(nextPage)

    const previousPage = () => {
        
        setPaginate((prevValue) => prevValue -8);
        setBase((prevBase) => prevBase -8)
      };  
      
    useEffect(  () => {
     dispatch(getDogs())
     dispatch(getTemperaments())
     //console.log('entro useEffect')
    },[])

    useEffect(() =>  {
        return () => {

            dispatch(reset())
        }
        //console.log('entro useEffect')
       },[])

    const orderBreed = (e) => {
        if ((e.target.value) === 'Asc') {
            return dispatch(orderNameAZ())
        };
        if ((e.target.value) === 'Desc') {
            return dispatch(orderNameZA())
        };
        
    }

    const orderWeight = (e) => {
        if(e.target.value === 'Asc') {
            return dispatch(orderWeightASC())
        }
        if(e.target.value === 'Desc') {
            return dispatch(orderWeightDESC())
        }
    }

    const orderOrigin = (e) => {
        
        e.preventDefault()
        dispatch(filterByOrigin(e.target.value))
    }

    const selects = 'DEFAULT'

    return (
        <div>
           
            <div className="selectTemp">
                <button onClick={()=> dispatch(getDogs())}>Clear Selection</button>
                
                <select onChange={orderBreed} value=''>
                    <option value=''  >Order by Name</option>
                    <option value='Asc'>Ascendente</option>
                    <option value='Desc'>Descendente</option>
              </select>

              <select onChange={orderOrigin} defaultValue='allOrigins'>
                    <option value='allOrigins'  >All Origins</option>
                    <option value='DOG_API'>API</option>
                    <option value='DOG_DB'>Created</option>
              </select>

              <select onChange={orderWeight} value=''>
                    <option value=''  >Order by Weight</option>
                    <option value='Asc'>Ascendente</option>
                    <option value='Desc'>Descendente</option>
              </select>

                <select onChange={(e) => dispatch(filterByTemps(e.target.value))}>
                    <option value=''>Filter by Temperament</option>
                    {
                        temperaments.map( temp => (
                            <option key={temp.id} value={temp.name}>Filter by temperament: {temp.name}</option>
                        ))
                    }
                   

                </select>
               
            </div>

            <button onClick={previousPage}>Previous Page</button>
            <button onClick={nextPage}>Next Page</button>
            {
                dogs.slice(base, paginate).map(dog => (
                    
                <div key={dog.id} className="individual">
                    <li className="dogInfo">
                        <div className="breedPicture">
                            <img src={dog.image} alt="no img found"></img>
                        </div>
                        <Link to={`/dogs/${dog.id}`}>
                        <h3>{dog.name}</h3>
                        </Link>
                        
                        <p>{dog.temperament}</p>
                        <p>{dog.weight}</p> 
                    </li>
                    </div>
                    
                    ))
                    
            }
             <div>
                <h1>hola</h1>
                </div>        

        </div>
        
        
    )
}