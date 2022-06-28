const initialState = {
    dogsLoaded: [],
    dogID: {},
    temperaments: [],
    dogsCreated: [],
}

/* function order(array, prop) {
    let ordered = []
    let orderedZA = []
    if(prop === 'name') {
        ordered = array.sort(function (a, b) {
            if(a.name < b.name) {
                return -1
            }
            if(a.name > b.name) {
                return 1
            }
            return 0
        })
    }
  
} */

function order(arr, prop) {   
    let ordered = [] 
    if(prop === 'name') {
        ordered = arr.sort(function (a, b) {        
            if (a[prop] < b[prop]) { return -1; }
            if (a[prop] > b[prop]) { return 1; }
            return 0;
        });
    } else {
        ordered = arr.sort(function (a, b) {            
            if (a[prop][0] < b[prop][0]) { return -1; }
            if (a[prop][0] > b[prop][0]) { return 1; }
            return 0;
        });
    
    }
    return ordered
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

        case 'FILTER_TEMPERAMENTS': 
            if(action.payload === '') return {
                ...state
            }
            let dogbase = [...state.dogsLoaded]
            let filteredDogs = dogbase.filter( d => d.temperament?.includes(action.payload))
            return {
                ...state,
                dogsLoaded: filteredDogs
            }

        case 'ORDER_A_Z':
            let ordered = order([...state.dogsLoaded], 'name')
            return {
                ...state,
                dogsLoaded: ordered
            }

        case 'ORDER_Z_A':
            let orderedZA = order([...state.dogsLoaded], 'name').reverse()
            return {
                ...state,
                dogsLoaded: orderedZA
            }

        case 'ORDER_WEIGHT_ASC':
            let orderedLowest = order([...state.dogsLoaded], 'weight')
            return {
                ...state,
                dogsLoaded: orderedLowest
            }
        case 'ORDER_WEIGHT_DESC':
            let orderedHighest = order([...state.dogsLoaded], 'weight').reverse()
            return {
                ...state,
                dogsLoaded: orderedHighest
            }
        case 'CREATE_DOG':
            return {
                ...state,
                dogsCreated: action.payload
            }
        case 'FILTER_ORIGIN':
            const value = state.dogsLoaded
            console.log(value)
            const origin =
            action.payload === 'allOrigins'
            ? value
            : value.filter(dogs => {
                /* dogs.filter((e) => {
                    
                }) */
                if(dogs.id === 'number') {
                    console.log('primer if')
                    return dogs 
                } else if(dogs.id === 'string') {
                    return dogs
            
                }
            })
            console.log(origin)
        //    console.log(value)
            // const filterByOrigin = state.dogsLoaded.filter( dogs => {
            //     console.log(dogs)
            //     let resultado = 
                
            //     // value == 'DOG_API' 
            //     // ? dogs.id == Number
            //     // : value == 'DOG_DB'
            //     // ? dogs.id == String
            //     // : false
            //     return resultado 
            // }) 
            return {
                ...state,
                dogsLoaded: origin
            }              
                              
        default:
            return state    

    }

}