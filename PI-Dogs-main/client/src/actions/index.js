import axios from 'axios';

 export default function getDogs() {
    return async function(dispatch) {
        let allDogs = (await axios.get(`http://localhost:3001/dogs`)).data;
       //let  allDogsjson = allDogs.toJson()
        dispatch({
            type:"GET_DOGS",
            payload: allDogs//json
        })
        
    }
}