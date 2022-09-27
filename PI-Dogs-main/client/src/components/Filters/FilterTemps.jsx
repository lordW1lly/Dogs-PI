import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {  filterByTemps, filterTemps } from "../../actions";

import './AllFilters.css'



export function FilterTemps() {


    const temps = useSelector(state => state.temperaments)
    const dispatch = useDispatch()
    
    const [tempis, setTempis] = useState([])
    
    useEffect( () => {
       
    },[])
    
    /* const [checkedtemp, setCheckedtemp] = useState(temperaments); */
    
    const handleTempis = (e) => {
        let updatedTempis = [...tempis, e.target.value]
       if(!tempis.includes(e.target.value)) {
        setTempis(updatedTempis)
        dispatch(filterTemps(updatedTempis))
       } else {
        setTempis(tempis.filter(t => t !== e.target.value))
        dispatch(filterTemps(tempis))
       }

    }

    console.log('soy tempis', tempis)
    
   /*  const handleOnChange = (position) => {
        const updatedCheckedState = temperaments.map((item, index) =>
        index === position ? !item : item
        );
       
        setCheckedtemp(updatedCheckedState);
        
    }
    
    console.log('soy checkedtemp:',checkedtemp)
 */
    return (
        <>
            <button class="btn btn-secondary dropdown-toggle bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#filterTemps" aria-expanded="false" aria-controls="filterTemps">
                Temps
            </button>
            <div class=" dropdown collapse tempsdiv" id="filterTemps">
                <div class=" card card-body dark">
                    {
                        temps.map((temp, index) =>
                        (
                            <li class=" form-check" key={temp.id}>
                                <input class="form-check-input"  key={temp.id} type="checkbox" value={temp.name}
                                 onChange={handleTempis} /*  onClick={()=> dispatch(filterByTemps(tempis))} */ id="flexCheckDefault" />
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

