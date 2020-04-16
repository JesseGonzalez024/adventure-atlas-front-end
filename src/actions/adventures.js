//------ Fetch POST Obj Arguments ------------------------

//POST to Adventures Controller

// For Plural Adventures Obj retreival
// Used during Library rendering 

//This Action is called if User rates exisiting Adventure
export const upvoteAdventure = id => {
  return {
    type: 'UPVOTE_ADVENTURE',
    id
  };
};

//---------ASYNC--------------------------------------

//This Action is called after a user creates new Adventure
export const addAdventure = adventure => {
  console.log("Inside Action Creator", adventure.type, adventure)
    
  const postAdventureObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(adventure)
    }

  return (dispatch) => {
    dispatch({ type: 'CREATING_ADVENTURE' });

    fetch("http://127.0.0.1:3000/adventures", postAdventureObj)
          .then(resp => resp.json())
          .then(adventure => dispatch({
            type: 'ADVENTURE_CREATED',
            payload: adventure
        }))
  };
};

//This Action is called by the Library Container
//Retrives all Adv instances from API
export function fetchAdventures(){
    return (dispatch) => {
      dispatch({ type: 'FETCHING_ADVENTURES' });
        
      fetch("http://127.0.0.1:3000/adventures")
        .then(response => response.json())
        .then(adventures => dispatch({
          type: 'RECIVED_ADVENTURES',
          payload: adventures
        }))
  };
};