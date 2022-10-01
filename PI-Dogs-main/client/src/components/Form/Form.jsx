
import react, { useEffect } from "react";
import { useState } from "react";
import './Form.css'
import { createDog } from "../../actions";
import { NavBar } from "../NavBar/NavBarBTS";

import { useSelector, useDispatch } from "react-redux";
/* import { getTemperaments } from "../../actions";
import axios from "axios"; */


export function validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = 'name is required';
    } else if (!/^[a-zA-Z\s]*$/.test(input.name)) {
        errors.name = 'name is invalid'
    }
    //!----> abajo los de Weight ------

    if (!/^\d+$/.test(input.minWeight) || !/[^0-9]/.test(input.maxWeight)) {
        errors.weight = 'must be a number'

    } else if (!input.minWeight || !input.maxWeight) {
        errors.weight = 'weight fields are empty'
    } else if (input.minWeight >= input.maxWeight) {
        errors.weight = 'Minimum-weight must be lower value than maximum-weight'
    }
//! --> abajo los de Height--------

    /* if(!/[^0-9]/.test(input.minHeight) || !/[^0-9]/.test(input.maxHeight) ) {
        errors.height = 'must be a number'

    } else */ if (!input.minHeight || !input.maxHeight) {
        errors.height = 'eight fields are empty'
    } else if (input.minHeight >= input.maxHeight) {
        errors.height = 'Minimum-height must be lower value than maximum-height'
    }
//?? ---> para abajo los de lifespan

    /* if(!/[^0-9]/.test(input.minLifeSpan) || !/[^0-9]/.test(input.maxLifeSpan) ) {
        errors.lifeSpan = 'must be a number'

    } else */ if (!input.minLifeSpan || !input.maxLifeSpan) {
        errors.lifeSpan = 'Life span fields are empty'
    } else if (input.minLifeSpan >= input.maxLifeSpan) {
        errors.lifeSpan = 'Minimum-life span life must be lower value than maximum value'
    }
    //!! abajo el de temp


    return errors;
}

export function validateTemp(temperament) {
    let tempError = {};
    if (temperament.length === 0) {
        tempError.temperament = 'Pick at least 3(three) words'
    }
}

export default function Form() {


    const dogsTemperaments = useSelector(state => state.temperaments)
    const dispatch = useDispatch()
    /* const dispatch = useDispatch() */
    const [temperament, setTemperament] = useState([])
    const [input, setInput] = useState({

        name: '',
        weight: '',
        minWeight: '',
        maxWeight: '',
        minHeight: '',
        maxHeight: '',
        height: '',
        lifeSpan: '',
        minLifeSpan: '',
        maxLifeSpan: '',
        button: {
            class: 'inactive',
            disabled: true
        }

    })



    const [errors, setErrors] = useState({})


    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
            /* weight: weightfuera */
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    const [tempError, SetTempError] = useState({})

    const handleTemp = (e) => {

        setTemperament([...temperament, e.target.value])
    }

    const onClose = (e) => {
        let newtemps = temperament.filter(t => t !== e.target.value)
        setTemperament(newtemps)

    }




    let newDog = {
        name: input.name,
        height: `${input.minHeight} - ${input.maxHeight}`,
        weight: `${input.minWeight} - ${input.maxWeight}`,
        temperament: `${temperament}`,
        lifeSpan: `${input.minLifeSpan} - ${input.maxLifeSpan}`
    }
    console.log(newDog)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createDog(newDog))
    }

    return (
        <div>
            <>
            <NavBar/>
            </>
            <div>
            <form onSubmit={handleSubmit}>

                <div className="field">
                    <label htmlFor="name">Name :</label>
                    <input type="text" name="name" value={input.name} onChange={handleInputChange} />
                    {
                        errors.name && (
                            <p>{errors.name}</p>
                        )
                    }
                </div>


                <div className="field">
                    {/* <h3>weightfuera: {weightfuera}</h3> */}
                    <h3> estado weight: {input.weight}</h3>
                    <input type="text" name="minWeight" placeholder="Min-Weight" value={input.minWeight} onChange={handleInputChange} />
                    <input type="text" name="maxWeight" placeholder="Max-Weight" value={input.maxWeight} onChange={handleInputChange} />
                    {
                        errors.weight && (
                            <p>{errors.weight}</p>
                        )
                    }
                </div>


                <div className="field">
                    <input type="text" name="minHeight" placeholder="Min-Height" value={input.minHeight} onChange={handleInputChange} />
                    <input type="text" name="maxHeight" placeholder="Max-Height" value={input.maxHeight} onChange={handleInputChange} />
                    {
                        errors.height && (
                            <p>{errors.height}</p>
                        )
                    }
                </div>



                <div className="field">


                    <input type="text" placeholder="Min-Life span" name="minLifeSpan" value={input.minLifeSpan} onChange={handleInputChange} />
                    <input type="text" placeholder="Max-Life span" name="maxLifeSpan" value={input.maxLifeSpan} onChange={handleInputChange} />
                </div>


                <div className="temperamentos">
                    <div className="selector">
                        <select multiple name="temperament" onChange={handleTemp} className="">
                            {dogsTemperaments.map(t => (
                                <option key={t.id} value={t.name} >{t.name}</option>
                            ))}
                        </select>

                        <h3>{temperament}</h3>


                    </div>
                    <div className="mapeo">
                        {
                            temperament.map(t => (
                                <button key={t} value={t} type="button" onClick={onClose} className="">{t}</button>
                            ))
                        }

                    </div>
                </div>
                <input type="submit" onSubmit={handleSubmit} value="Submit" />


                {/*  {
dogsTemperaments.map( dt => (
    
    
))
} */}

            </form>
            </div>
        </div>

    )
}