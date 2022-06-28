import axios from 'axios';
import { bindActionCreators } from 'redux';



 export  function getDogs() {
    return async function(dispatch) {
        let allDogs = (await axios.get(`http://localhost:3001/dogs`)).data;
       //let  allDogsjson = allDogs.toJson()
        dispatch({
            type:"GET_DOGS",
            payload: allDogs//json
        })
        
    }
}

export function searchDog(name) {
    return async function(dispatch) {
        let breedName = (await axios.get(`http://localhost:3001/dogs?name=${name}`)).data;
        dispatch({
            type: "SEARCH_DOG",
            payload: breedName
        })
    }
}
export function getDogID(id) {
    return async (dispatch) => { 
        let dogID = (await axios.get(`http://localhost:3001/dogs/${id}`)).data
        dispatch({
            type: "GET_DOG_ID",
            payload: dogID
        })
    }
}

export function getTemperaments() {
    return async (dispatch) => {
        let dogTemperaments = (await axios.get('http://localhost:3001/temperament')).data
        dispatch({
            type: "GET_TEMPERAMENTS",
            payload: dogTemperaments
        })
    }
}

export  function reset() {
    return (dispatch) =>{
        dispatch({
            type: "RESET"
        }
        )
    }
    
}

export function createDog(dog) {
    return async (dispatch) => {
        try {
            let newDog = {
                name: dog.name,
                height: `${dog.minHeight} - ${dog.maxHeight}`,
                weight: `${dog.minWeight} - ${dog.maxWeight}`,
                temperament: dog.temperament,
                life_span: `${dog.minLifeSpan} - ${dog.maxLifeSpan}`
            }
            let resp = ''
            await axios.post('http://localhost:3001/dog', newDog)
            .then(response => resp = response.data)
            return dispatch({
                type: 'CREATE_DOG',
                payload: resp
            })

        } catch(error) {
            return console.log(error)
        }
    }
}

export function filterByTemps(temperament) {
    return {
        type: "FILTER_TEMPERAMENTS",
        payload: temperament
    }
}

export function orderNameAZ() {
    return {
        type: "ORDER_A_Z"
    }
}

export function orderNameZA () {
    return {
        type: "ORDER_Z_A"
    }
}

export function orderWeightASC () {
    return {
        type: 'ORDER_WEIGHT_ASC'
    }
}

export function orderWeightDESC () {
    return {
        type: 'ORDER_WEIGHT_DESC'
    }
}

export function filterByOrigin (payload) {
    try {
        return {
            type: 'FILTER_ORIGIN',
            payload: payload
        }
        
    } catch (error) {
        return alert('failed filtering origin')
    }
}