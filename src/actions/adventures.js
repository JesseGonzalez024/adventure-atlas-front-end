
export const addAdventure = adventure => {
    console.log("Inside Action Creator", adventure.type, adventure)
    return {
      type: 'ADD_ADVENTURE',
      adventure
    };
  };

export const upvoteAdventure = id => {
    return {
      type: 'UPVOTE_ADVENTURE',
      id
    };
};

export function fetchAdventures(){
    return (dispatch) => {
      dispatch({ type: 'LOADING_ADVENTURES' });
        
      fetch("http://127.0.0.1:3000/adventures")
        .then(response => response.json())
        .then(adventures => dispatch({
          type: 'ADD_ADVENTURES', 
          adventures
        }
      )
    )
  }
}

  