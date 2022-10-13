import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { filterByTemps, filterTemps, getTemperaments } from "../../actions";

import './AllFilters.css'



export function FilterTemps() {


    const temps = useSelector(state => state.temperaments)
    const dispatch = useDispatch()

    const [tempis, setTempis] = useState([])

    useEffect(() => {
        dispatch(getTemperaments())
    }, [])

    

    const handleTempis = (e) => {
        let updatedTempis = [...tempis, e.target.value]
        if (!tempis.includes(e.target.value)) {
            setTempis(updatedTempis)
            dispatch(filterTemps(updatedTempis))
        } else {
            updatedTempis = tempis.filter(t => t !== e.target.value)
            setTempis(updatedTempis)
            dispatch(filterTemps(updatedTempis))
        }

    }

    console.log('soy tempis', tempis)

    
    return (
        <>
            <button class="btn btn-secondary dropdown-toggle bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#filterTemps" aria-expanded="false" aria-controls="filterTemps">
                Temps
            </button>
            <div class=" dropdown collapse tempsdiv" id="filterTemps">
                <div class=" card card-body dark">
                    <div class="container text-center">
                        <div class="row row-cols-auto">

                            {
                                temps.map((temp) =>
                                (
                                    <div class="col" key={temp.id}>
                                        <li class=" form-check" key={temp.id}>
                                            <input class="form-check-input" key={temp.id} type="checkbox" value={temp.name}
                                                onChange={handleTempis} id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                {temp.name}
                                            </label>
                                        </li>
                                    </div>
                                )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

