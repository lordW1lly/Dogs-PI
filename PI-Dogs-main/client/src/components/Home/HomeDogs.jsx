import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {
    getDogs, reset, getTemperaments,
    
} from "../../actions";

import './HomeDogs.css'
import { NavBar } from "../NavBar/NavBarBTS";

import { AllFiltersButtos } from "../Filters/AllFiltersButtons";


export default function HomeDogs() {


    const dispatch = useDispatch()
    const dogs = useSelector(state => state.dogsLoaded)

    useEffect(() => {
        dispatch(getDogs())
        dispatch(getTemperaments())
        //console.log('entro useEffect')
    }, [])
    
    const [paginate, setPaginate] = useState(8);
    const [base, setBase] = useState(0);
    const [counter, setCounter] = useState(1)
    const [dogsInPage] = useState(8)



    const indexPages = Math.ceil(dogs.length / dogsInPage)



    const nextPage = () => {

        setPaginate((prevValue) => prevValue + dogsInPage);
        setBase((prevBase) => prevBase + dogsInPage)
        setCounter((prevValue) => prevValue + 1)
    };


    const previousPage = () => {

        setPaginate((prevValue) => prevValue - 8);
        setBase((prevBase) => prevBase - 8)
        setCounter((prevValue) => prevValue - 1)
    };

    

    useEffect(() => {
        return () => {

            dispatch(reset())
        }
        //console.log('entro useEffect')
    }, [])

    

   






    return (
        <div>
            <>
            <NavBar />
            </>
            <>
            <AllFiltersButtos/>
            </>

    
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