
let initialState = {
    tags: [],
    loading: false

}

const tagReducer = (state = initialState, action) => {

    // console.log("Inside Tags Reducer", action, state)

    switch (action.type) {
        case 'FETCHING_TAGS':
            return {
                ...state, 
                loading: true
            }
        
        case 'RECEIVED_TAGS':
            return {
                ...state,
                tags: action.payload,
                loading: false
            }
        
        case 'CREATING_TAGS':
            return {
                ...state,
                loading: true
            }

        case 'TAGS_CREATED':
            return {
                ...state,
                tags: [...state.tags, action.payload],
                loading: false
            }
        default:
            return state
    }
}

export default tagReducer