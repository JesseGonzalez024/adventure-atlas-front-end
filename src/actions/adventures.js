
export const searchByLocation = (string, adventures) => {
    let results = adventures.filter(adv => {
      return adv.location.includes(string)
    })

    return {
      type: 'SEARCH_BY_LOCATION',
      payload: results
    }

}

// ASYNC
export const addAdventure = adventure => {
  console.log("Inside addAdventure action creator", adventure)

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
    
    return fetch("http://127.0.0.1:3000/adventures", postAdventureObj)
          .then(resp => resp.json())
          .then(adventure => {
            dispatch({
              type: 'ADVENTURE_CREATED',
              payload: adventure
            })
            return adventure
        })
  };
};

export function fetchAdventures(){
    return (dispatch) => {
      dispatch({ type: 'FETCHING_ADVENTURES' });
        
      fetch("http://127.0.0.1:3000/adventures")
        .then(response => response.json())
        .then(adventures => dispatch({
          type: 'RECEIVED_ADVENTURES',
          payload: adventures
        }))
  };
};