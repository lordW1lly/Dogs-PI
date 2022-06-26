const initialState = {
    dogsLoaded: [],
    dogID: {},
    temperaments: [],
}


export default  function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_DOGS':
            return {
                ...state,
                dogsLoaded: action.payload
            }
        case 'SEARCH_DOG':
            return {
                ...state,
                dogsLoaded: action.payload
            }
        case 'GET_DOG_ID':
            return {
                ...state,
                dogID: action.payload
            }
        case 'RESET':
            return{
                ...state,
                dogID:{}

            } 
        case 'GET_TEMPERAMENTS':
            return {
                ...state,
                temperaments: action.payload
            }          
        default:
            return state    

    }

}