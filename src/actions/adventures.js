//------ Fetch POST Obj Arguments ------------------------

//POST to Adventures Controller
const postAdventureObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
        body: JSON.stringify(adventure)
}

//Post to Photos Controller
const postPhotosObj = {
  method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
        body: JSON.stringify(photos)
}

//Post to Tags Controller
const postTagsObj = {
  method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
        body: JSON.stringify(tags)
}

//------ Fetch Action return value -------------------

// For Singular Adventure Obj creation
// Used after newForm
const gotAdevnture = (adventure) => {
  return {
      type: 'GOT_ADVENTURE',
      payload: adventure
  }
}

// For Plural Adventures Obj retreival
// Used during Library rendering 
const gotAdevntures = (adventures) => {
  return {
    type: 'GOT_ADVENTURES',
    payload: adventures
  }
}

//---------ASYNC--------------------------------------

//This Action is called after a user creates new Adventure
export const addAdventure = adventure => {
  console.log("Inside Action Creator", adventure.type, adventure)
  return (dispatch) => {
    dispatch({ type: 'SENDING_ADVENTURE' });

    fetch("http://127.0.0.1:3000/adventures", postAdventureObj)
          .then(resp => resp.json())
          .then(adventure => dispatch(gotAdevnture(adventure)))
  };
};

//This Action is called if User rates exisiting Adventure
export const upvoteAdventure = id => {
    return {
      type: 'UPVOTE_ADVENTURE',
      id
    };
};


//This Action is called by the Library Container
export function fetchAdventures(){
    return (dispatch) => {
      dispatch({ type: 'LOADING_ADVENTURES' });
        
      fetch("http://127.0.0.1:3000/adventures")
        .then(response => response.json())
        .then(adventures => dispatch(gotAdevntures(adventures)))
  };
};

//This Action Retrives all Photos

//This Action Retrives all Tags

  