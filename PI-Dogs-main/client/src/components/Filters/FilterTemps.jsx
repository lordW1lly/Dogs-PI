import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getTemperaments } from "../../actions";

import './AllFilters.css'

export function FilterTemps() {


    const temps = useSelector(state => state.temperaments)
    const dispatch = useDispatch()
    const [checkedtemp, setCheckedtemp] = useState(
        new Array(temps.length).fill(false)
    )
    console.log('soycheckd', checkedtemp)


    /* const handleOnChange = (e) => {
        const updatedCheckedState = checkedtemp.map((key, value) =>
            index === position ? !item : item
        );
    } */


    return (
        <>
            <button class="btn btn-secondary dropdown-toggle bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#filterTemps" aria-expanded="false" aria-controls="filterTemps">
                Temps
            </button>
            <div class=" dropdown collapse tempsdiv" id="filterTemps">
                <div class=" card card-body dark">
                    {
                        temps.map(temp =>
                        (
                            <li class=" form-check" key={temp.id}>
                                <input class="form-check-input" checked='false' key={temp.id} type="checkbox" value={temp.name} id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    {temp.name}
                                </label>
                            </li>
                        )
                        )
                    }
                </div>
            </div>
        </>
    )
}

