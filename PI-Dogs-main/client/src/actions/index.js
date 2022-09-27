import axios from 'axios';




 export  function getDogs() {
    return async function(dispatch) {
        // const dogsCreated = await Dog.findAll()
        let allDogs = (await axios.get(`http://localhost:3001/dogs`)).data;
        // dogsCreated.map( dc => allDogs.push(dc))
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

export function createDog(dog, temperament) {
    return async (dispatch) => {
        try {
            /* let newDog = {
                name: dog.name,
                height: `${dog.minHeight} - ${dog.maxHeight}`,
                weight: `${dog.minWeight} - ${dog.maxWeight}`,
                temperament: temperament.temperament,
                lifeSpan: `${dog.minLifeSpan} - ${dog.maxLifeSpan}`
            } */
            let newDog = {
                name: dog.name,
                height: dog.height,
                weight: dog.weight,
                temperament: dog.temperament,
                lifeSpan: dog.lifeSpan
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

export function filterTemps(selectedTemps) {
    return async (dispatch) => {
        const allDogs =  (await axios.get(`http://localhost:3001/dogs`)).data
        try {
            
            const splittedTemps = allDogs.map(dog =>  {
                let dogo = {
                    id: dog.id,
                    image: dog.image,
                    name: dog.name,
                    temperament: dog.temperament?.split(', '),
                    weight: dog.weight
                }
                return dogo
            })
            console.log('soy splitted', splittedTemps)
            console.log('soy selectedTemps', selectedTemps)
             
            let matched = splittedTemps.filter(dog => dog.temperament?.includes(selectedTemps))
            let probando = []
            for( let i=0; i < selectedTemps.length; i++ ) {
                let dogstoFilter = splittedTemps
                let filtered = splittedTemps.filter(dog => dog.temperament?.includes(selectedTemps[i]))
                dogstoFilter = filtered
                probando = filtered
                
                
                    
                console.log('soy dogsToFilter', dogstoFilter)
                
            }
            console.log('soy probando',probando)
            /* console.log('soy filtered', filtered) */
            return dispatch({
                type: 'FILTER_TEMPS',
                payload: matched
            })
        } catch(error) {
            console.log(error)
        }
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

export function filterByApi () {
    return {
        type: 'FILTER_BY_API',
        
    }
}

export function filterByDB () {
    return {
        type: 'FILTER_BY_DB',
        
    }
}

export function allOrigins() {
    return {
        type: 'ALL_ORIGINS'
    }
}

