
const adventureReducer = (state = [], action) => {
 
    // debugger
    
    switch(action.type){
        case 'ADD_ADVENTURE':
            return {adventures: action.adventure}
        
        case 'UPVOTE_ADVENTURE':
            return {adventure: action.adventure}
        
         default:
            return state
    }
}

export default adventureReducer