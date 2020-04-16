
let initialState = {
    photos: [],
    loading: false
}

const photoReducer = (state = initialState, action) => {
    
    console.log("Inside Photos Reducer", action, state)
    
    switch (action.type) {
        case 'FETCHING_PHOTOS':
            return {
                ...state, 
                loading: true
            }
        
        case 'RECIVED_PHOTOS':
            return {
                ...state,
                photos: action.payload,
                loading: false
            }
        case 'CREATING_PHOTOS':
            return {
                ...state,
                loading: true
            }
        case 'PHOTOS_CREATED':
            return {
                ...state,
                photos: [...state.photos, action.payload],
                loading: false
            }
        default:
            return state

    }
}

export default photoReducer