const initialState = {
    dogsLoaded: [],
    dogID: {},
    temperaments: [],
    dogsCreated: [],
}



function order(arr, prop) {
    let ordered = []
    if (prop === 'name') {
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


export default function rootReducer(state = initialState, action) {
    switch (action.type) {

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
            return {
                ...state,
                dogID: {}

            }

        case 'GET_TEMPERAMENTS':
            return {
                ...state,
                temperaments: action.payload
            }

        case 'FILTER_TEMPERAMENTS':
            if (action.payload === '' ) return {
                ...state
            }
            let dogbase = [...state.dogsLoaded]
            let filteredDogs = dogbase.filter(d => d.temperament?.includes(action.payload))
            return {
                ...state,
                dogsLoaded: filteredDogs
            }

        case 'FILTER_TEMPS':
            console.log('soy action.payload', action.payload)
            if(action.payload === []) return {
                ...state
            }
            return {
                ...state,
                dogsLoaded: action.payload
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

        case 'ORDER_HEIGHT_ASC':
            return {
                ...state,
                dogsLoaded: order([...state.dogsLoaded], 'height')
            }

        case 'ORDER_HEIGHT_DESC':
            return {
                ...state,
                dogsLoaded: order([...state.dogsLoaded], 'height').reverse()
            }


        case 'CREATE_DOG':
            return {
                ...state,
                dogsCreated: action.payload
            }

        case 'FILTER_BY_API':
            let dogos = [...state.dogsLoaded]
            let dogsApi = dogos.filter(d => d.id.length !== 36)
            console.log(dogsApi)
            return {
                ...state,
                dogsLoaded: dogsApi
            }

        case 'FILTER_BY_DB':
            let doggy = [...state.dogsLoaded]
            let dogsDB = doggy.filter(d => d.id.length === 36)
            return {
                ...state,
                dogsLoaded: dogsDB
            }

        case 'ALL_ORIGINS':
            return {
                ...state
            }




        default:
            return state

    }

}