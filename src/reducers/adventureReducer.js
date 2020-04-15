
let initialState = {
    state: [],
    loading: false
}


const adventureReducer = (state = initialState, action) => {

    debugger
    switch(action.type) {
        case 'FETCHING_ADVENTURES':
            return {
                ...state,
                astronauts: [...state.astronauts],
                loading: true
            }
 
        case 'ADD_ADVENTURES':
            return {
                ...state,
                adventures: action.adventures,
                loading: false
            }

        case 'UPVOTE_ADVENTURE':
            return {adventure: action.adventure}
 
        default:
            return state;
    }
}

export default adventureReducer