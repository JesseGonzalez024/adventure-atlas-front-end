function initialState(){
    return {adventures: [] }
} 

const adventureReducer = (state = initialState, action) => {
    
    switch(action.type){
        // case 'FETCHING_DOGS':
        //     return {...state, loading: true}
        // case 'GOT_DOGS':
        //     return {...state, adventures: action.payload, loading: false}
        // case 'ADD_DOG':
        //     return {...state, adventures: [action.payload, ...state.adventures]}
        // default:
        //     return state
    }
}

export default adventureReducer