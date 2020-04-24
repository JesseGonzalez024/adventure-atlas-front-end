// export const addTags = tags => {
//     console.log("Inside addTags action creator", tags)

//     const postTagsObj = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify(tags)
//     }

//     return (dispatch) => {
//         dispatch({type: 'CREATING_TAGS'});

//         fetch("http://127.0.0.1:3000/tags", postTagsObj)
//             .then(resp => resp.json())
//             .then(tags => dispatch({
//                 type: 'TAGS_CREATED',
//                 payload: tags
//             }))
//     };
// };

// export function fetchTags(){
//     return (dispatch) => {
//       dispatch({ type: 'FETCHING_TAGS' });
        
//       fetch("http://127.0.0.1:3000/tags")
//         .then(response => response.json())
//         .then(tags => dispatch({
//           type: 'RECEIVED_TAGS',
//           payload: tags
//         }))
//   };
// };

