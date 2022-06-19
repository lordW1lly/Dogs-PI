const initialState = {
    dogsLoaded: []
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
               // ...state,
                dogsLoaded: action.payload
            }    
        default:
            return state    

    }

}