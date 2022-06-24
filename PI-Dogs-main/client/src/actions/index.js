import axios from 'axios';


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
export  function reset() {
    return (dispatch) =>{
        dispatch({
            type: "RESET"
        }
        )
    }
    
}