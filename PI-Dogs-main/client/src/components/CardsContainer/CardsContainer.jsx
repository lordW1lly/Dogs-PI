import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Card } from "../Card/Card";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getDogs, getDogsId, getTemperaments } from "../../actions";


export function CardContainer() {

    const dogs = useSelector(state => state.dogsLoaded)
    const dispatch = useDispatch()

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

    return (

        <>
            <div className="prev&next">
                {
                    counter > 1 && <button onClick={previousPage}>Previous Page</button>
                }
                {
                    counter < indexPages && <button onClick={nextPage}>Next Page</button>

                }
            </div>
            
            <div class='card-group'>
                {dogs.length >= 1 && dogs.slice(base, paginate).map(dog => {
                    return (
                        <Card dog={dog} />




                    )
                })}
            </div>


        </>
    )
}