
let initialState = {
    adventures: [],
    loading: false
}

const adventureReducer = (state = initialState, action) => {

    console.log("Inside Adventures Reducer", action)

    switch(action.type) {
        case 'FETCHING_ADVENTURES':
            return {
                ...state, 
                loading: true
            }
        
        case 'RECEIVED_ADVENTURES':
            
            return {
                ...state,
                adventures: action.payload,
                loading: false
            }
 
        case 'CREATING_ADVENTURE':
            return {
                ...state,
                loading: true
            }
        case 'ADVENTURE_CREATED':
            return {
                ...state,
                adventures: [...state.adventures, action.payload],
                loading: false
            }
        case 'SEARCH_BY_LOCATION':
            return {
                ...state,
                adventures: action.payload,
                loading: false
            }

        case 'UPVOTE_ADVENTURE':
            return {adventure: action.adventure}
 
        default:
            return state;
    }
}

export default adventureReducer