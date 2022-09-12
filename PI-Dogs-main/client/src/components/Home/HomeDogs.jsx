import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {getDogs, reset, getTemperaments, filterByTemps,
     orderNameZA, orderNameAZ, orderWeightDESC, orderWeightASC, filterByApi, filterByDB, allOrigins} from "../../actions";

import  './HomeDogs.css'
import { NavBar } from "../NavBar/NavBarBTS";


export default function HomeDogs () {

    const dispatch = useDispatch()
    const dogs = useSelector(state => state.dogsLoaded)
    const temperaments = useSelector(state => state.temperaments)
    const [paginate, setPaginate] = useState(8);
    const [base, setBase] = useState(0);
    const [counter, setCounter] = useState(1)
    const [dogsInPage] = useState(8)
    
    
    
    const indexPages = Math.ceil(dogs.length / dogsInPage)
    
    

    const nextPage = () => {
        
        setPaginate((prevValue) => prevValue + dogsInPage);
        setBase((prevBase) => prevBase + dogsInPage)
        setCounter((prevValue) => prevValue +1)
    };
    

    const previousPage = () => {
        
        setPaginate((prevValue) => prevValue -8);
        setBase((prevBase) => prevBase -8)
        setCounter((prevValue) => prevValue -1)
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

        if(e.target.value === 'API') {
            return dispatch(filterByApi())
        }

        if(e.target.value === 'D.Base') {
            return dispatch(filterByDB())
        }
        
        if(e.target.value === 'allOrigins') {
            return dispatch(allOrigins())
        }
    }

    

    return (
        <div>
            <NavBar/>
           
            {/* <div className="selectTemp">
                <button onClick={()=> dispatch(getDogs())}>Clear Selection</button>
                
                <select onChange={ orderBreed } value=''>
                    <option value=''  >Order by Name</option>
                    <option value='Asc'>Ascendente</option>
                    <option value='Desc'>Descendente</option>
              </select>

            

              <select onChange={ orderOrigin } defaultValue='allOrigins'>
                    <option value='allOrigins'>All Origins</option>
                    <option value='API'>API</option>
                    <option value='D.Base'>Created</option>
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
               
            </div> */}
            <div className="prev&next">
            {
            counter > 1 && <button onClick={previousPage}>Previous Page</button> 
            }
            {
            counter < indexPages && <button onClick={nextPage}>Next Page</button>

            }
            </div>

            
          
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
                        <p>{dog.weight} kgs</p>
                        <p>{dog.height} cms</p> 
                    </li>
                    </div>
                    
                    ))
                    
            }
          
        </div>
        
        
    )
}