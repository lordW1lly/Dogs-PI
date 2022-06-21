const initialState = {
    dogsLoaded: [],
    dogID: []
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
        default:
            return state    

    }

}