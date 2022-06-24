
import react from "react";
import { useState } from "react";
import './Form.css'

export default function Form () {

  
    const [input, setInput] = useState({
        
        name: '',
        weight: '',
        minWeight:'',
        maxWeight:'',
        minHeight: '',
        maxHeight:'',
        height:'',
        lifeSpan:'',
        minLifeSpan:'',
        maxLifeSpan:'',
        temperament: ''
    })
    //const [errors, setErrors] = useState({})
    
   // const [height, setHeight] = useState(' ')
    
    const weightfuera = input.minWeight.concat(' - ', input.maxWeight)
    

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
            weight: weightfuera
            
        })
    }

   
        
       
        
    return (
        <form>

            <div className="field">
                <label htmlFor="name">Name :</label>
                <input type="text" name="name" value={input.name} onChange={handleInputChange} />
            </div>

            <div className="field">
                
                <h3>weightfuera: {weightfuera}</h3>
                <h3> estado weight: {input.weight}</h3>
                <label htmlFor="minWeight">Min.Weight :</label>
                <input type="text" name="minWeight" value={input.minWeight} onChange={handleInputChange} />
                <label htmlFor="maxWeight">Max.Weight :</label>
                <input type="text" name="maxWeight" value={input.maxWeight} onChange={handleInputChange} />
            </div>

            <div className="field">
            <label htmlFor="height">Height :</label>
                <input type="text" name="height" value={input.height} onChange={handleInputChange} />
            </div>

            <div className="field">
            <label htmlFor="lifeSpan">Life span :</label>
                <input type="text" name="lifeSpan" value={input.lifeSpan} onChange={handleInputChange} />
            </div>

            <input type="submit" value="Submit"/>

        </form>
    )
}