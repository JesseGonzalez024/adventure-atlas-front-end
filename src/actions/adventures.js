
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

  