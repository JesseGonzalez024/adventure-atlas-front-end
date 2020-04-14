
const adventureReducer = (state = [], action) => {
    
    // debugger
    switch(action.type){
        case 'ADD_ADVENTURE':
            return [...state, action.adventure]
        
        default:
            return state
    }
}

export default adventureReducer