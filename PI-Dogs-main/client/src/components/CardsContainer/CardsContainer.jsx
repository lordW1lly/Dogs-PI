import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Card } from "../Card/Card";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getDogs, getDogsId, getTemperaments } from "../../actions";
import './CardsContainer.css'


export function CardContainer() {

    const dogs = useSelector(state => state.dogsLoaded)
    const dispatch = useDispatch() 

    useEffect(() => {
        dispatch(getDogs())
        /* dispatch(getTemperaments()) */
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
            <div class="btn-group prev&next btns-next" role="group" aria-label="Basic mixed styles example">
                {
                    counter > 1 ? <button type="button" class="btn btn-dark" onClick={previousPage}   >Previous Page</button> : <button type="button" class="btn btn-dark" onClick={previousPage} disabled   >Previous Page</button>
                }
                {
                    counter < indexPages ? <button type="button" class="btn btn-dark" onClick={nextPage}>Next Page</button> : <button type="button" class="btn btn-dark" onClick={nextPage} disabled >Next Page</button>

                }
            </div>

            <div class="row row-cols-1 row-cols-md-4 g-3">
                {dogs.length >= 1 && dogs.slice(base, paginate).map(dog => {
                    return (

                        <div class="col" key={dog.name}>
                            <Card class='cards h-100' dog={dog}  />
                        </div>
                    )
                })}
            </div>

        </>
    )
}




