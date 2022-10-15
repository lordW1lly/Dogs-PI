import axios from 'axios';
const UrlDeploy = 'https://theperritosapp-back-production.up.railway.app'




 export  function getDogs() {
    return async function(dispatch) {
        
        let allDogs = (await axios.get(`${UrlDeploy}/dogs`)).data;
        
        dispatch({
            type:"GET_DOGS",
            payload: allDogs
        })
        
    }
}

export function searchDog(name) {
    return async function(dispatch) {
        let breedName = (await axios.get(`${UrlDeploy}/dogs?name=${name}`)).data;
        dispatch({
            type: "SEARCH_DOG",
            payload: breedName
        })
    }
}
export function getDogID(id) {
    return async (dispatch) => { 
        let dogID = (await axios.get(`${UrlDeploy}/dogs/${id}`)).data
        dispatch({
            type: "GET_DOG_ID",
            payload: dogID
        })
    }
}

export function getTemperaments() {
    return async (dispatch) => {
        let dogTemperaments = (await axios.get(`${UrlDeploy}/temperament`)).data
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
            await axios.post(`${UrlDeploy}/dog`, newDog)
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
        const allDogs =  (await axios.get(`${UrlDeploy}/dogs`)).data
        try {
            
            let splittedTemps = allDogs.map(dog =>  {
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
             
            
            let dogsWithTemp = []
            if(selectedTemps.length === 0) {
                dogsWithTemp = allDogs
                console.log('soy tempslength0:', dogsWithTemp)
                return dispatch({
                    type: 'FILTER_TEMPS',
                    payload: allDogs
                })
            }
            for( let i=0 ; i < selectedTemps.length; i++ ) {
                  if (i < 1) {
                   let oneTemp = splittedTemps.filter(dog => dog.temperament?.includes(selectedTemps[i]))
                   console.log('soy oneTemp:', oneTemp)
                   dogsWithTemp = oneTemp
                }
                let othersTemps = dogsWithTemp.filter(dog => dog.temperament?.includes(selectedTemps[i]))
                dogsWithTemp = othersTemps
                
                    
               
                
            }
            let dogsFinal = dogsWithTemp.map( dog => {
               let tempString = (dog.temperament?.map(tmp => " ".concat(tmp))).toString()
                console.log(tempString)
                let dogconcat = {
                    name: dog.name,
                    image: dog.image,
                    id: dog.id,
                    weight: dog.weight,
                    temperament: tempString //dog.temperament?.concat('').toString('')
                }
                return dogconcat
            })
            console.log('soy dogsFinal',dogsFinal)
            /* console.log('soy filtered', filtered) */
            return dispatch({
                type: 'FILTER_TEMPS',
                payload: dogsFinal
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

