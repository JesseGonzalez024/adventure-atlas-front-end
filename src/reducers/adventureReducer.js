
let initialState = {
    adventures: [],
    loading: false
}


const adventureReducer = (state = initialState, action) => {

    // debugger
    switch(action.type) {
        case 'FETCHING_ADVENTURES':
            return {
                ...state, 
                loading: true
            }
        
        case 'RECIVED_ADVENTURES':
            return {
                ...state,
                adventures: action.adventures,
                loading: false
            }
 
        case 'CREATING_ADVENTURE':
            return {
                ...state,
                adventures: action.adventures,
                loading: false
            }
        case 'ADVENTURE_CREATED':
            return {

            }

        case 'UPVOTE_ADVENTURE':
            return {adventure: action.adventure}
 
        default:
            return state;
    }
}

export default adventureReducer